'use client';

import Link from 'next/link';
import { products } from '../../data/products';
import ProductGrid from '../ProductGrid/ProductGrid';
import styles from './BestSellers.module.css';

export default function BestSellers() {
    // Simulate finding best sellers (taking 4 specific items with good imagery)
    // e.g., items 1, 3, 7, 10
    const bestSellers = products.filter(p => [1, 3, 7, 10].includes(p.id));

    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <h2 className={styles.title}>Best Sellers</h2>
                <Link href="/shop?filter=best-sellers" className={styles.viewAll}>
                    View All
                </Link>
            </div>

            {/* We can reuse ProductGrid, but we might need special mobile carousel styling. 
                ProductGrid has a grid layout. We can wrap it or style it locally.
                Actually, ProductGrid uses CSS Grid. For a carousel, we need flex.
                Let's manually render card logic here for custom carousel control or override styles.
                
                Simpler: Render the cards directly here to ensure the carousel behavior works perfectly.
            */}

            <div className={styles.carouselContainer}>
                {bestSellers.map(product => (
                    <Link key={product.id} href={`/product/${product.id}`} className={styles.card}>
                        <div className={styles.imageWrapper}>
                            <img src={product.image} alt={product.name} />
                            {product.stock < 10 && (
                                <span className={styles.lowStockBadge}>
                                    Only {product.stock} left!
                                </span>
                            )}
                        </div>
                        <div className={styles.info}>
                            <h3>{product.name}</h3>
                            <p>${product.price}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
