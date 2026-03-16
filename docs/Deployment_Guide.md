# 🚀 CareLink Deployment Guide

This guide provides step-by-step instructions for deploying CareLink to Netlify and Supabase.

## 1. Prerequisites & Environment Variables
Before deploying, set up the following environment variables in your Netlify **Site configuration > Environment variables**.

| Key | Description | Example |
| :--- | :--- | :--- |
| `DATABASE_URL` | Supabase connection string (Use Port 6543) | `postgres://postgres.xxx:pw@aws-0-ap-northeast-2.pooler.supabase.com:6543/postgres` |
| `JWT_SECRET` | Secret key for JWT tokens | `your_long_random_string` |
| `GEMINI_API_KEY` | Google Gemini AI API Key | `AIza...` |
| `VITE_API_URL` | API Base URL (Leave empty for relative path) | `/.netlify/functions/api` |

## 2. Database Setup (Supabase)
Run the following commands locally to initialize the database schema and seed test data.

```bash
cd backend
npm install
node src/init_db.js    # Initializes tables using PostgreSQL schema
node src/seed.js       # Seeds the test user and sample data
```

## 3. Netlify Configuration
The `netlify.toml` file in the root handles the build settings. Ensure the following match in your Netlify dashboard:
- **Build command**: `npm install && cd frontend && npm install && npm run build`
- **Publish directory**: `frontend/dist`
- **Functions directory**: `backend/functions`

## 4. Test Credentials
Use the following account for Quality Assurance (QA) and testing:
- **Email**: `test@test.com`
- **Password**: `password123`

## 5. Post-Deployment Checklist
- [ ] Check if the site loads without 404 on refresh (handled by `_redirects`).
- [ ] Verify login functionality (handled by robust body parsing middleware).
- [ ] Test AI Report analysis by uploading a health check image.
- [ ] Verify AI Chatbot responses.

---
*Last Updated: 2026-03-16*
