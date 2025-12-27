# Paige's Panthera | Fierce Luxury

A high-end, luxury fashion e-commerce platform built with modern web technologies. Focuses on premium aesthetics, seamless user experience, and secure payments.

## 🌟 Features

*   **Premium Design**: Custom glassmorphism UI, gold-accented typography, and smooth animations.
*   **Dynamic Home Page**: Best Sellers carousel, curated collections, and responsive layout.
*   **E-commerce Functionality**:
    *   Product catalog with filtering and search.
    *   Shopping cart with persistent state.
    *   Real-time stock indicators (e.g., "Only 3 left!").
*   **Secure Checkout**: Integrated **Stripe** payment gateway for secure transaction processing.
*   **Mobile Optimized**: Fully responsive design with touch-friendly sliders and navigation.

## 🛠️ Technology Stack

*   **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
*   **Language**: TypeScript
*   **Styling**: CSS Modules (Custom Design System)
*   **Payments**: [Stripe](https://stripe.com/)
*   **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites

*   Node.js 18+ installed
*   npm or yarn

### Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/paiges-panthera.git
    cd paiges-panthera
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Configure Environment Variables**:
    Create a `.env.local` file in the root directory and add your Stripe keys:
    ```env
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
    STRIPE_SECRET_KEY=sk_test_...
    ```

4.  **Run the development server**:
    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📦 Build & Deploy

To create a production build:

```bash
npm run build
```

This project is optimized for deployment on **Vercel**. Simply import your repository and add the environment variables in the Vercel dashboard.

## 📄 License

[MIT](LICENSE)
