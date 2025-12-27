import type { Metadata } from 'next'
import './globals.css'
import { CartProvider } from './context/CartContext'

export const metadata: Metadata = {
    title: "Paige's Panthera | Fierce Luxury",
    description: 'Exclusive Leopard Print Fashion',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body suppressHydrationWarning={true}>
                <CartProvider>
                    {children}
                </CartProvider>
            </body>
        </html>
    )
}
