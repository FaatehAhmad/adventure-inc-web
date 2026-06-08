"use client";

import { FormEvent, useState } from "react";
import type { Activity } from "../data/activities";

export function BookingForm({ activities }: { activities: Activity[] }) {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus("Sending booking request...");

    const form = new FormData(event.currentTarget);
    const payload = {
      activity: form.get("activity"),
      date: form.get("date"),
      guests: Number(form.get("guests")),
      name: form.get("name"),
      phone: form.get("phone"),
      email: form.get("email"),
      addons: form.getAll("addons"),
      requirements: form.get("requirements")
    };

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Booking request failed");
      }

      setStatus("Booking request sent. We will contact you soon.");
      event.currentTarget.reset();
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Booking request failed");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="checkout-card booking-form" onSubmit={handleSubmit}>
      <label>
        <span>Activity</span>
        <select name="activity" required>
          {activities.map((activity) => (
            <option key={activity.title}>{activity.title}</option>
          ))}
        </select>
      </label>
      <div className="form-grid">
        <label>
          <span>Preferred date</span>
          <input type="date" name="date" defaultValue="2026-06-13" required />
        </label>
        <label>
          <span>Guests</span>
          <input type="number" name="guests" min="1" defaultValue="2" required />
        </label>
      </div>
      <div className="form-grid">
        <label>
          <span>Your name</span>
          <input type="text" name="name" placeholder="Full name" required />
        </label>
        <label>
          <span>Phone</span>
          <input type="tel" name="phone" placeholder="+91..." required />
        </label>
      </div>
      <label>
        <span>Email</span>
        <input type="email" name="email" placeholder="you@example.com" required />
      </label>
      <fieldset className="addon-list">
        <legend>Add-ons</legend>
        <label><input type="checkbox" name="addons" value="Trail breakfast" /> Trail breakfast</label>
        <label><input type="checkbox" name="addons" value="Photo package" /> Photo package</label>
        <label><input type="checkbox" name="addons" value="Pickup from city" /> Pickup from city</label>
        <label><input type="checkbox" name="addons" value="Private guide" /> Private guide</label>
      </fieldset>
      <label>
        <span>Specific requirements</span>
        <textarea name="requirements" rows={5} placeholder="Tell us about pickup location, medical notes, group type, preferred time, gear needs, food preferences, or anything else." required />
      </label>
      <div className="price-box">
        <span>Send to</span>
        <strong>faateh.ahmad@gmail.com</strong>
      </div>
      {status ? <p className="form-status">{status}</p> : null}
      <button className="full-cta" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send booking requirements"}
      </button>
    </form>
  );
}
