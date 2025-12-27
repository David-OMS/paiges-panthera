import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import styles from './shipping.module.css';

export default function ShippingPage() {
    return (
        <main>
            <Navbar />

            <div className={styles.pageContainer}>
                <h1 className={styles.title}>Shipping & Returns</h1>

                <section className={styles.section}>
                    <h2>Shipping Information</h2>
                    <p>We offer free standard shipping on all orders over $200.</p>

                    <h3>Delivery Times</h3>
                    <ul>
                        <li><strong>Standard Shipping:</strong> 5-7 business days</li>
                        <li><strong>Express Shipping:</strong> 2-3 business days ($15)</li>
                        <li><strong>Next Day:</strong> 1 business day ($30)</li>
                    </ul>

                    <h3>International Shipping</h3>
                    <p>We ship worldwide! International delivery times vary by location (7-14 business days).</p>
                </section>

                <section className={styles.section}>
                    <h2>Returns & Exchanges</h2>
                    <p>We want you to love your purchase! If you're not completely satisfied, we accept returns within 30 days of delivery.</p>

                    <h3>Return Policy</h3>
                    <ul>
                        <li>Items must be unworn, unwashed, and in original condition with tags attached</li>
                        <li>Free returns for US customers</li>
                        <li>Refunds processed within 5-7 business days</li>
                        <li>Sale items are final sale</li>
                    </ul>

                    <h3>How to Return</h3>
                    <ol>
                        <li>Contact us at returns@paigespanthera.com</li>
                        <li>Pack your item securely with the original packaging</li>
                        <li>Use the prepaid return label (US only)</li>
                        <li>Drop off at any USPS location</li>
                    </ol>
                </section>

                <section className={styles.section}>
                    <h2>Order Tracking</h2>
                    <p>Once your order ships, you'll receive a tracking number via email. Track your package anytime!</p>
                </section>

                <section className={styles.section}>
                    <h2>Questions?</h2>
                    <p>Contact our customer service team at <a href="mailto:hello@paigespanthera.com">hello@paigespanthera.com</a></p>
                </section>
            </div>

            <Footer />
        </main>
    );
}
