import Link from 'next/link';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { products } from '../data/products';
import styles from './new-arrivals.module.css';

export default function NewArrivalsPage() {
    const newArrivals = products.filter(p => p.isNew);

    return (
        <main>
            <Navbar />

            <div className={styles.pageContainer}>
                <div className={styles.hero}>
                    <h1 className={styles.title}>New Arrivals</h1>
                    <p className={styles.subtitle}>Fresh fierce finds just for you</p>
                </div>

                <div className={styles.productsGrid}>
                    {newArrivals.map((product) => (
                        <Link
                            key={product.id}
                            href={`/product/${product.id}`}
                            className={styles.productCard}
                        >
                            <div className={styles.imageWrapper}>
                                <img src={product.image} alt={product.name} className={styles.image} />
                                <div className={styles.newBadge}>NEW</div>
                                <div className={styles.overlay}></div>
                            </div>
                            <div className={styles.info}>
                                <p className={styles.category}>{product.category.toUpperCase()}</p>
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
            </div>

            <Footer />
        </main>
    );
}
