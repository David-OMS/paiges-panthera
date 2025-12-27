# Deployment Guide for Paige's Panthera

## Option 1: Vercel (Recommended & Free)
The easiest way to deploy your Next.js app for free is using **Vercel**.

### Prerequisites
1. Create a [Vercel Account](https://vercel.com/signup).
2. Push your code to a GitHub repository (optional but recommended for auto-deployments).

### Steps
1. **Using GitHub (Easiest)**:
   - Push this project to a new GitHub repository.
   - Go to your Vercel Dashboard.
   - Click **"Add New..."** -> **"Project"**.
   - Import your GitHub repository.
   - Vercel will auto-detect the Next.js settings.
   - **Environment Variables**:
     - Add `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` and `STRIPE_SECRET_KEY` in the Vercel Project Settings > Environment Variables.
   - Click **Deploy**.

2. **Using Vercel CLI (Manual)**:
   - Open your terminal in this project folder.
   - Run: `npx vercel`
   - Follow the prompts (log in via browser, confirm project settings).
   - Use `npx vercel --prod` to deploy to production.

## Option 2: Netlify
Netlify also supports Next.js.
1. Drag and drop your project folder or connect via Git.
2. Ensure build command is `npm run build` and publish directory is `.next`.
