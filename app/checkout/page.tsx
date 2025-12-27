'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useCart } from '../context/CartContext';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import styles from './checkout.module.css';
import getStripe from '../utils/get-stripe';

export default function CheckoutPage() {
    const router = useRouter();
    const { items, totalPrice } = useCart(); // Removed clearCart, handled on success page or webhook ideally
    const [step, setStep] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        phone: '',
        cardNumber: '', // Not sent to server, used for UI only in this demo if needed, but Stripe Checkout handles it
        cardName: '',
        expiry: '',
        cvv: '',
    });

    if (items.length === 0) {
        return (
            <main>
                <Navbar />
                <div className={styles.emptyCheckout}>
                    <h1>Your Cart is Empty</h1>
                    <Link href="/shop" className="btn btn-primary">Shop Now</Link>
                </div>
                <Footer />
            </main>
        );
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (step < 2) {
            setStep(step + 1);
            return;
        }

        // Process Payment (Step 2)
        setIsLoading(true);

        try {
            const response = await fetch('/api/checkout_sessions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ items }),
            });

            if (!response.ok) {
                const { error } = await response.json();
                throw new Error(error || 'Something went wrong');
            }

            const { url } = await response.json();

            if (url) {
                window.location.href = url;
            } else {
                throw new Error('No checkout URL received');
            }
        } catch (error) {
            console.error('Payment Error:', error);
            alert('Payment failed. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main>
            <Navbar />

            <div className={styles.checkoutContainer}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Checkout</h1>
                    <div className={styles.steps}>
                        <div className={`${styles.stepIndicator} ${step >= 1 ? styles.active : ''}`}>1. Shipping</div>
                        <div className={`${styles.stepIndicator} ${step >= 2 ? styles.active : ''}`}>2. Review & Pay</div>
                    </div>
                </div>

                <div className={styles.checkoutLayout}>
                    <form onSubmit={handleSubmit} className={styles.formSection}>
                        {step === 1 && (
                            <div className={styles.stepContent}>
                                <h2 className={styles.stepTitle}>Shipping Information</h2>
                                <div className={styles.formGrid}>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={styles.input}
                                        required
                                    />
                                    <input
                                        type="text"
                                        name="firstName"
                                        placeholder="First Name"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className={styles.input}
                                        required
                                    />
                                    <input
                                        type="text"
                                        name="lastName"
                                        placeholder="Last Name"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className={styles.input}
                                        required
                                    />
                                    <input
                                        type="text"
                                        name="address"
                                        placeholder="Street Address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        className={`${styles.input} ${styles.fullWidth}`}
                                        required
                                    />
                                    <input
                                        type="text"
                                        name="city"
                                        placeholder="City"
                                        value={formData.city}
                                        onChange={handleChange}
                                        className={styles.input}
                                        required
                                    />
                                    <input
                                        type="text"
                                        name="state"
                                        placeholder="State"
                                        value={formData.state}
                                        onChange={handleChange}
                                        className={styles.input}
                                        required
                                    />
                                    <input
                                        type="text"
                                        name="zip"
                                        placeholder="ZIP Code"
                                        value={formData.zip}
                                        onChange={handleChange}
                                        className={styles.input}
                                        required
                                    />
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone Number"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className={styles.input}
                                        required
                                    />
                                </div>
                            </div>
                        )}

                        {step === 2 && (
                            <div className={styles.stepContent}>
                                <h2 className={styles.stepTitle}>Review Order</h2>
                                <div className={styles.reviewSection}>
                                    <div className={styles.reviewGroup}>
                                        <h3>Shipping Address</h3>
                                        <p>{formData.firstName} {formData.lastName}</p>
                                        <p>{formData.address}</p>
                                        <p>{formData.city}, {formData.state} {formData.zip}</p>
                                        <p>{formData.phone}</p>
                                    </div>
                                    <div className={styles.reviewGroup}>
                                        <h3>Payment Method</h3>
                                        <p>Secure payment via Stripe</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className={styles.formActions}>
                            {step > 1 && (
                                <button
                                    type="button"
                                    onClick={() => setStep(step - 1)}
                                    className="btn btn-outline"
                                >
                                    Back
                                </button>
                            )}
                            <button disabled={isLoading} type="submit" className="btn btn-primary">
                                {isLoading ? 'Processing...' : step === 2 ? 'Place Order' : 'Continue'}
                            </button>
                        </div>
                    </form>

                    <div className={styles.orderSummary}>
                        <h2 className={styles.summaryTitle}>Order Summary</h2>
                        <div className={styles.summaryItems}>
                            {items.map((item) => (
                                <div key={`${item.id}-${item.size}`} className={styles.summaryItem}>
                                    <img src={item.image} alt={item.name} />
                                    <div>
                                        <p className={styles.itemName}>{item.name}</p>
                                        <p className={styles.itemDetails}>Size: {item.size} | Qty: {item.quantity}</p>
                                    </div>
                                    <p className={styles.itemPrice}>${item.price * item.quantity}</p>
                                </div>
                            ))}
                        </div>
                        <div className={styles.summaryTotals}>
                            <div className={styles.summaryRow}>
                                <span>Subtotal</span>
                                <span>${totalPrice}</span>
                            </div>
                            <div className={styles.summaryRow}>
                                <span>Shipping</span>
                                <span>FREE</span>
                            </div>
                            <div className={styles.summaryRow}>
                                <span>Tax</span>
                                <span>${(totalPrice * 0.08).toFixed(2)}</span>
                            </div>
                            <div className={styles.summaryTotal}>
                                <span>Total</span>
                                <span>${(totalPrice * 1.08).toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
