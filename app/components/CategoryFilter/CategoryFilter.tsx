'use client';

import Link from 'next/link';
import { useMemo } from 'react';
import { products } from '../../data/products';
import styles from './CategoryFilter.module.css';

export default function CategoryFilter() {
    const categories = useMemo(() => {
        const counts: Record<string, number> = {};
        products.forEach(p => {
            counts[p.category] = (counts[p.category] || 0) + 1;
        });

        return [
            { id: 'all', name: 'All Products', count: products.length },
            { id: 'dresses', name: 'Dresses', count: counts['dresses'] || 0 },
            { id: 'accessories', name: 'Accessories', count: counts['accessories'] || 0 },
            { id: 'evening', name: 'Evening Wear', count: counts['evening'] || 0 },
            { id: 'casual', name: 'Casual', count: counts['casual'] || 0 },
        ];
    }, []);

    return (
        <section className={styles.categorySection}>
            <div className={styles.container}>
                <h2 className={styles.title}>Shop by Category</h2>
                <p className={styles.subtitle}>Find your perfect fierce look</p>

                <div className={styles.categoryGrid}>
                    {categories.map((category) => (
                        <Link
                            key={category.id}
                            href={category.id === 'all' ? '/shop' : `/shop?category=${category.id}`}
                            className={styles.categoryCard}
                        >
                            <div className={styles.categoryContent}>
                                <h3 className={styles.categoryName}>{category.name}</h3>
                                <p className={styles.categoryCount}>{category.count} items</p>
                            </div>
                            <div className={styles.arrow}>→</div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
