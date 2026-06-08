import type { Booking } from "../types/booking";
import { formatBookingEmail } from "./bookings";

export async function sendBookingEmail(booking: Booking) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.BOOKING_EMAIL_TO || "faateh.ahmad@gmail.com";
  const from = process.env.RESEND_FROM || "Adventure INC <onboarding@resend.dev>";

  if (!apiKey) {
    return {
      sent: false,
      reason: "RESEND_API_KEY is not configured"
    };
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: booking.email,
      subject: `Adventure INC booking request - ${booking.activity}`,
      text: formatBookingEmail(booking)
    })
  });

  const result = await response.json().catch(() => ({}));

  if (!response.ok) {
    return {
      sent: false,
      reason: result.message || "Email provider rejected the request"
    };
  }

  return {
    sent: true,
    provider: "resend",
    id: result.id
  };
}
