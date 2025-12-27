'use client';

import Link from 'next/link';
import { useMemo } from 'react';
import { products } from '../../data/products';
import styles from './SaleSection.module.css';

export default function SaleSection() {
    const saleItems = useMemo(() => {
        return products.filter(p => p.isOnSale).slice(0, 4);
    }, []);

    if (saleItems.length === 0) return null;

    return (
        <section className={styles.saleSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div>
                        <h2 className={styles.title}>Sale</h2>
                        <p className={styles.subtitle}>Up to 40% off fierce finds</p>
                    </div>
                    <Link href="/sale" className={styles.viewAll}>
                        View All Sale →
                    </Link>
                </div>

                <div className={styles.grid}>
                    {saleItems.map((item) => {
                        const discount = item.originalPrice ? Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100) : 0;

                        return (
                            <Link
                                key={item.id}
                                href={`/product/${item.id}`}
                                className={styles.saleCard}
                            >
                                <div className={styles.imageWrapper}>
                                    <img src={item.image} alt={item.name} className={styles.image} />
                                    {discount > 0 && <div className={styles.badge}>{discount}% OFF</div>}
                                    <div className={styles.overlay}></div>
                                </div>
                                <div className={styles.info}>
                                    <h3 className={styles.productName}>{item.name}</h3>
                                    <div className={styles.pricing}>
                                        <span className={styles.salePrice}>${item.price}</span>
                                        <span className={styles.originalPrice}>${item.originalPrice}</span>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
