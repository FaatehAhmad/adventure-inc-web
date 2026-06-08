import { listBookings } from "../../lib/bookings";

export const dynamic = "force-dynamic";

export default async function AdminBookingsPage() {
  const bookings = await listBookings();

  return (
    <main className="admin-page">
      <header className="admin-header">
        <a className="brand" href="/">
          <span className="brand-mark ridge-mark" aria-hidden="true"><span /><span /><span /></span>
          <span className="brand-text">
            <strong>Adventure INC</strong>
            <small>Bookings admin</small>
          </span>
        </a>
        <a className="host-link" href="/">Back to site</a>
      </header>

      <section className="section">
        <p className="eyebrow">Admin</p>
        <h1 className="admin-title">Booking requests</h1>
        <div className="admin-grid">
          {bookings.length ? (
            bookings.map((booking) => (
              <article className="admin-card" key={booking.id}>
                <div>
                  <span className="status">{booking.status}</span>
                  <h2>{booking.activity}</h2>
                  <p>{booking.date} - {booking.guests} guests</p>
                </div>
                <dl>
                  <div><dt>Name</dt><dd>{booking.name}</dd></div>
                  <div><dt>Phone</dt><dd>{booking.phone}</dd></div>
                  <div><dt>Email</dt><dd>{booking.email}</dd></div>
                  <div><dt>Add-ons</dt><dd>{booking.addons.length ? booking.addons.join(", ") : "None"}</dd></div>
                  <div><dt>Requirements</dt><dd>{booking.requirements}</dd></div>
                  <div><dt>Submitted</dt><dd>{new Date(booking.createdAt).toLocaleString()}</dd></div>
                </dl>
              </article>
            ))
          ) : (
            <div className="admin-empty">
              <h2>No bookings yet</h2>
              <p>New booking requests will appear here after the form is submitted.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
