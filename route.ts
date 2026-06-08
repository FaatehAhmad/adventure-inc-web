import { NextResponse } from "next/server";
import { createBooking, listBookings, validateBooking } from "../../../lib/bookings";
import { sendBookingEmail } from "../../../lib/email";

export async function GET() {
  const bookings = await listBookings();
  return NextResponse.json({ bookings });
}

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const input = validateBooking(payload);
    const booking = await createBooking(input);
    const email = await sendBookingEmail(booking);

    return NextResponse.json(
      {
        ok: true,
        booking,
        email
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error: error instanceof Error ? error.message : "Booking request failed"
      },
      { status: 400 }
    );
  }
}
