import Link from 'next/link';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { products } from '../data/products';
import styles from './sale.module.css';

export default function SalePage() {
    const saleItems = products.filter(p => p.isOnSale);

    return (
        <main>
            <Navbar />

            <div className={styles.pageContainer}>
                <div className={styles.hero}>
                    <h1 className={styles.title}>Sale</h1>
                    <p className={styles.subtitle}>Up to 40% off fierce finds</p>
                </div>

                <div className={styles.productsGrid}>
                    {saleItems.map((item) => {
                        const discount = item.originalPrice ? Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100) : 0;

                        return (
                            <Link
                                key={item.id}
                                href={`/product/${item.id}`}
                                className={styles.productCard}
                            >
                                <div className={styles.imageWrapper}>
                                    <img src={item.image} alt={item.name} className={styles.image} />
                                    {discount > 0 && <div className={styles.badge}>{discount}% OFF</div>}
                                    <div className={styles.overlay}></div>
                                </div>
                                <div className={styles.info}>
                                    <p className={styles.category}>{item.category.toUpperCase()}</p>
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

            <Footer />
        </main>
    );
}
