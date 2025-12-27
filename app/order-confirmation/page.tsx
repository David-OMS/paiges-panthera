import Link from 'next/link';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import styles from './confirmation.module.css';

export default function OrderConfirmationPage() {
    return (
        <main>
            <Navbar />

            <div className={styles.confirmationContainer}>
                <div className={styles.successIcon}>✓</div>
                <h1 className={styles.title}>Order Confirmed!</h1>
                <p className={styles.subtitle}>Thank you for your purchase</p>

                <div className={styles.orderDetails}>
                    <p className={styles.orderNumber}>Order #PP-{Date.now().toString().slice(-6)}</p>
                    <p className={styles.message}>
                        We've sent a confirmation email with your order details.
                        Your fierce pieces will be on their way soon!
                    </p>
                </div>

                <div className={styles.actions}>
                    <Link href="/shop" className="btn btn-primary">Continue Shopping</Link>
                    <Link href="/" className="btn btn-outline">Back to Home</Link>
                </div>
            </div>

            <Footer />
        </main>
    );
}
