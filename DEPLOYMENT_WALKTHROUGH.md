# 🚀 Deployment Walkthrough

Here is your step-by-step guide to pushing your code to GitHub and deploying it live on Vercel.

## Phase 1: Push to GitHub

1.  **Initialize Git** (if you haven't already):
    ```bash
    git init
    ```

2.  **Add all your files**:
    ```bash
    git add .
    ```

3.  **Commit your changes**:
    ```bash
    git commit -m "Final polish: Premium text logo and mobile optimization"
    ```

4.  **Create a Repository on GitHub**:
    *   Go to [GitHub.com/new](https://github.com/new).
    *   Name it `paiges-panthera`.
    *   Make it **Public** (or Private).
    *   **Do not** initialize with README, .gitignore, or license (you already have them).
    *   Click **Create repository**.

5.  **Connect and Push**:
    *   Copy the commands under "…or push an existing repository from the command line". They will look like this:
    ```bash
    git branch -M main
    git remote add origin https://github.com/YOUR_USERNAME/paiges-panthera.git
    git push -u origin main
    ```
    *   Paste and run them in your terminal.

## Phase 2: Deploy on Vercel

1.  **Go to Vercel**:
    *   Log in to [vercel.com](https://vercel.com).

2.  **Import Project**:
    *   Click **"Add New"** > **"Project"**.
    *   Find `paiges-panthera` in the list (you might need to click "Adjust GitHub App Permissions" if you don't see it).
    *   Click **Import**.

3.  **Configure Environment Variables**:
    *   Expand the **"Environment Variables"** section.
    *   Add the keys from your `.env.local` file:
        *   `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`: `pk_test_...`
        *   `STRIPE_SECRET_KEY`: `sk_test_...`

4.  **Deploy**:
    *   Click **Deploy**.
    *   Wait for the confetti! 🎉

Your site will be live at `https://paiges-panthera-[something].vercel.app`!
