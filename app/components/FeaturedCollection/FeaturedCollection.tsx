'use client';

import { useEffect, useRef, useState, useMemo } from 'react';
import Link from 'next/link';
import { products as allProducts } from '../../data/products';
import styles from './FeaturedCollection.module.css';

export default function FeaturedCollection() {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);

    const products = useMemo(() => {
        return allProducts.filter(p => p.isNew);
    }, []);

    useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        let animationId: number;
        let lastTimestamp = 0;
        const speed = 30; // pixels per second

        const animate = (timestamp: number) => {
            if (!lastTimestamp) lastTimestamp = timestamp;
            const delta = timestamp - lastTimestamp;
            lastTimestamp = timestamp;

            if (!isHovering) {
                carousel.scrollLeft += (speed * delta) / 1000;

                // Reset scroll when we reach the midpoint (where duplicates start)
                const maxScroll = carousel.scrollWidth / 2;
                if (carousel.scrollLeft >= maxScroll) {
                    carousel.scrollLeft = 0;
                }
            }

            animationId = requestAnimationFrame(animate);
        };

        animationId = requestAnimationFrame(animate);

        return () => {
            if (animationId) cancelAnimationFrame(animationId);
        };
    }, [isHovering]);

    return (
        <section className={styles.featured}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>New Arrivals</h2>
                    <Link href="/new-arrivals" className={styles.viewAll}>
                        View All →
                    </Link>
                </div>

                <div
                    ref={carouselRef}
                    className={styles.carousel}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                >
                    {/* Duplicate items for seamless infinite scroll */}
                    {[...products, ...products].map((product, index) => (
                        <Link
                            key={`${product.id}-${index}`}
                            href={`/product/${product.id}`}
                            className={styles.productCard}
                        >
                            <div className={styles.imageWrapper}>
                                <img src={product.image} alt={product.name} className={styles.productImage} />
                                <div className={styles.overlay}></div>
                            </div>
                            <div className={styles.productInfo}>
                                <h3 className={styles.productName}>{product.name}</h3>
                                <p className={styles.productPrice}>${product.price}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
