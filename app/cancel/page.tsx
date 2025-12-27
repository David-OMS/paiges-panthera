'use client';

import Link from 'next/link';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import styles from '../success/success.module.css'; // Re-use success styles for consistency

export default function CancelPage() {
    return (
        <main>
            <Navbar />
            <div className={styles.successContainer}>
                <div className={styles.content}>
                    <h1 className={styles.title} style={{ color: 'var(--color-red, #d9534f)' }}>Order Cancelled</h1>
                    <p className={styles.message}>
                        You have not been charged. If this was a mistake, you can try again.
                    </p>
                    <Link href="/checkout" className="btn btn-primary">
                        Try Again
                    </Link>
                </div>
            </div>
            <Footer />
        </main>
    );
}
