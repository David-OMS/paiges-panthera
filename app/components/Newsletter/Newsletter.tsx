'use client';

import { useState } from 'react';
import styles from './Newsletter.module.css';

export default function Newsletter() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Placeholder - will connect to backend later
        if (email && email.includes('@')) {
            setStatus('success');
            setEmail('');
            setTimeout(() => setStatus('idle'), 3000);
        } else {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 3000);
        }
    };

    return (
        <section className={styles.newsletter}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.title}>Join The Pride</h2>
                    <p className={styles.subtitle}>
                        Get exclusive access to new arrivals, special offers, and fierce style inspiration.
                    </p>

                    <form onSubmit={handleSubmit} className={styles.form}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={styles.input}
                            required
                        />
                        <button type="submit" className={styles.button}>
                            Subscribe
                        </button>
                    </form>

                    {status === 'success' && (
                        <p className={styles.successMessage}>✓ Welcome to the pride!</p>
                    )}
                    {status === 'error' && (
                        <p className={styles.errorMessage}>Please enter a valid email</p>
                    )}
                </div>
            </div>
        </section>
    );
}
