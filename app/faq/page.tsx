'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import styles from './faq.module.css';

const faqs = [
    {
        category: 'Ordering & Payment',
        questions: [
            {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and Apple Pay.',
            },
            {
                q: 'Is my payment information secure?',
                a: 'Yes! We use industry-standard SSL encryption to protect your payment information.',
            },
            {
                q: 'Can I modify or cancel my order?',
                a: 'Orders can be modified or canceled within 1 hour of placement. Contact us immediately at hello@paigespanthera.com.',
            },
        ],
    },
    {
        category: 'Shipping & Delivery',
        questions: [
            {
                q: 'How long does shipping take?',
                a: 'Standard shipping takes 5-7 business days. Express (2-3 days) and Next Day options are available.',
            },
            {
                q: 'Do you ship internationally?',
                a: 'Yes! We ship worldwide. International delivery takes 7-14 business days depending on location.',
            },
            {
                q: 'How can I track my order?',
                a: 'You will receive a tracking number via email once your order ships. Use it to track your package anytime.',
            },
        ],
    },
    {
        category: 'Returns & Exchanges',
        questions: [
            {
                q: 'What is your return policy?',
                a: 'We accept returns within 30 days of delivery. Items must be unworn, unwashed, and in original condition with tags.',
            },
            {
                q: 'How do I return an item?',
                a: 'Email returns@paigespanthera.com for a prepaid return label (US only). Pack securely and drop off at any USPS location.',
            },
            {
                q: 'When will I receive my refund?',
                a: 'Refunds are processed within 5-7 business days after we receive your return.',
            },
        ],
    },
    {
        category: 'Sizing & Fit',
        questions: [
            {
                q: 'How do I find my size?',
                a: 'Check our size guide on each product page. We recommend measuring yourself and comparing to our charts.',
            },
            {
                q: 'What if the item does not fit?',
                a: 'We offer free exchanges! Contact us within 30 days and we will send you a different size.',
            },
        ],
    },
];

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<string | null>(null);

    const toggleAccordion = (id: string) => {
        setOpenIndex(openIndex === id ? null : id);
    };

    return (
        <main>
            <Navbar />

            <div className={styles.faqContainer}>
                <h1 className={styles.title}>Frequently Asked Questions</h1>
                <p className={styles.subtitle}>Everything you need to know about shopping with Paige's Panthera</p>

                <div className={styles.faqSections}>
                    {faqs.map((section, sectionIdx) => (
                        <div key={sectionIdx} className={styles.faqSection}>
                            <h2 className={styles.categoryTitle}>{section.category}</h2>
                            <div className={styles.questions}>
                                {section.questions.map((item, itemIdx) => {
                                    const id = `${sectionIdx}-${itemIdx}`;
                                    const isOpen = openIndex === id;

                                    return (
                                        <div key={id} className={styles.faqItem}>
                                            <button
                                                className={styles.question}
                                                onClick={() => toggleAccordion(id)}
                                            >
                                                <span>{item.q}</span>
                                                <span className={styles.icon}>{isOpen ? '−' : '+'}</span>
                                            </button>
                                            {isOpen && (
                                                <div className={styles.answer}>
                                                    <p>{item.a}</p>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.contactSection}>
                    <h2>Still have questions?</h2>
                    <p>Contact our customer service team at <a href="mailto:hello@paigespanthera.com">hello@paigespanthera.com</a></p>
                </div>
            </div>

            <Footer />
        </main>
    );
}
