'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useCart } from '../context/CartContext';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import styles from './success.module.css';

export default function SuccessPage() {
    const { clearCart } = useCart();

    useEffect(() => {
        clearCart();
    }, [clearCart]);

    return (
        <main>
            <Navbar />
            <div className={styles.successContainer}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Payment Successful!</h1>
                    <p className={styles.message}>
                        Thank you for your purchase. Your order has been confirmed.
                        You will receive an email shortly.
                    </p>
                    <Link href="/shop" className="btn btn-primary">
                        Continue Shopping
                    </Link>
                </div>
            </div>
            <Footer />
        </main>
    );
}
