import Link from 'next/link';
import { Product } from '../../data/products';
import styles from './ProductGrid.module.css';

interface ProductGridProps {
    products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
    if (products.length === 0) {
        return (
            <div className={styles.noResults}>
                <p>No products found matching your criteria.</p>
            </div>
        );
    }

    return (
        <div className={styles.grid}>
            {products.map((product) => (
                <Link
                    key={product.id}
                    href={`/product/${product.id}`}
                    className={styles.card}
                >
                    <div className={styles.imageWrapper}>
                        <img src={product.image} alt={product.name} className={styles.image} />
                        {product.isNew && <span className={styles.badge}>NEW</span>}
                        {product.isOnSale && <span className={`${styles.badge} ${styles.saleBadge}`}>SALE</span>}
                        {product.stock < 10 && (
                            <span className={styles.lowStockBadge}>
                                Only {product.stock} Left!
                            </span>
                        )}
                    </div>
                    <div className={styles.info}>
                        <h3 className={styles.productName}>{product.name}</h3>
                        <div className={styles.pricing}>
                            {product.isOnSale ? (
                                <>
                                    <span className={styles.salePrice}>${product.price}</span>
                                    <span className={styles.originalPrice}>${product.originalPrice}</span>
                                </>
                            ) : (
                                <span className={styles.price}>${product.price}</span>
                            )}
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}
