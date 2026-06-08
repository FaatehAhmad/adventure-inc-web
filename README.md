# Adventure INC Web

Deployable Next.js website and backend for Adventure INC.

This folder is intended to be uploaded as its own GitHub repository. The `package.json` file is at the repository root, so Vercel should deploy it without setting a nested root directory.

## Run

```bash
cd webapp
npm install
npm run dev
```

Open `http://localhost:3000`.

## Vercel Deployment

When importing this repo into Vercel, set:

```text
Root Directory: ./
Framework Preset: Next.js
Install Command: npm install
Build Command: npm run build
Output Directory: .next
Node.js Version: 22.x
```

Do not set Root Directory to `webapp` for this clean repo.

## Backend Routes

- `GET /api/health`
- `GET /api/bookings`
- `POST /api/bookings`

Bookings are stored at `webapp/.data/bookings.json` for the MVP. The storage layer is isolated in `lib/bookings.ts` so it can be replaced with Postgres later.

## Email

Set `RESEND_API_KEY`, `RESEND_FROM`, and `BOOKING_EMAIL_TO` to send booking emails automatically. Without `RESEND_API_KEY`, bookings are still saved.

## Admin

View booking requests at:

```text
http://localhost:3000/admin
```

Set `ADMIN_USERNAME` and `ADMIN_PASSWORD` to protect this page. In local development, `/admin` is open when no password is configured.

## Production Notes

The JSON storage layer is useful for local MVP testing. For deployment on serverless hosts like Vercel, move bookings to Postgres using `data/schema.sql`, because serverless file storage is not persistent.
