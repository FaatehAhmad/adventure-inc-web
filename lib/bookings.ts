import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { randomUUID } from "node:crypto";
import type { Booking, BookingInput } from "../types/booking";

const dataDir = join(process.cwd(), ".data");
const bookingsFile = join(dataDir, "bookings.json");

export function validateBooking(payload: unknown): BookingInput {
  const body = payload as Partial<BookingInput>;
  const requiredFields: Array<keyof BookingInput> = ["activity", "date", "guests", "name", "phone", "email", "requirements"];
  const missing = requiredFields.filter((field) => !String(body?.[field] ?? "").trim());

  if (missing.length) {
    throw new Error(`Missing required fields: ${missing.join(", ")}`);
  }

  const guests = Number(body.guests);

  if (!Number.isInteger(guests) || guests < 1) {
    throw new Error("Guests must be a positive number");
  }

  return {
    activity: String(body.activity).trim(),
    date: String(body.date).trim(),
    guests,
    name: String(body.name).trim(),
    phone: String(body.phone).trim(),
    email: String(body.email).trim(),
    addons: Array.isArray(body.addons) ? body.addons.map(String) : [],
    requirements: String(body.requirements).trim()
  };
}

export async function listBookings(): Promise<Booking[]> {
  try {
    const file = await readFile(bookingsFile, "utf8");
    return JSON.parse(file) as Booking[];
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return [];
    }

    throw error;
  }
}

export async function createBooking(input: BookingInput): Promise<Booking> {
  await mkdir(dataDir, { recursive: true });

  const booking: Booking = {
    ...input,
    id: randomUUID(),
    status: "new",
    createdAt: new Date().toISOString()
  };

  const bookings = await listBookings();
  bookings.unshift(booking);
  await writeFile(bookingsFile, `${JSON.stringify(bookings, null, 2)}\n`, "utf8");

  return booking;
}

export function formatBookingEmail(booking: Booking): string {
  return [
    "New Adventure INC booking request",
    "",
    `Booking ID: ${booking.id}`,
    `Activity: ${booking.activity}`,
    `Preferred date: ${booking.date}`,
    `Guests: ${booking.guests}`,
    "",
    "Customer details",
    `Name: ${booking.name}`,
    `Phone: ${booking.phone}`,
    `Email: ${booking.email}`,
    "",
    "Add-ons",
    booking.addons.length ? booking.addons.map((item) => `- ${item}`).join("\n") : "None selected",
    "",
    "Specific requirements",
    booking.requirements,
    "",
    `Submitted at: ${booking.createdAt}`
  ].join("\n");
}
