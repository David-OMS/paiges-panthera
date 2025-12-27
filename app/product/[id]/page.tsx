'use client';

import { use, useState, useMemo } from 'react';
import Link from 'next/link';
import { useCart } from '../../context/CartContext';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { products } from '../../data/products';
import styles from './product.module.css';

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    // Unwrap async params using React.use()
    const { id } = use(params);
    const product = useMemo(() => products.find(p => p.id === parseInt(id)), [id]);

    const { addToCart } = useCart();
    const [selectedSize, setSelectedSize] = useState('M');
    const [added, setAdded] = useState(false);

    if (!product) {
        return (
            <main>
                <Navbar />
                <div className={styles.notFound}>
                    <h1>Product Not Found</h1>
                    <Link href="/shop" className="btn btn-primary">Back to Shop</Link>
                </div>
                <Footer />
            </main>
        );
    }

    const handleAddToCart = () => {
        addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            size: selectedSize,
        });
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
    };

    const relatedProducts = useMemo(() => {
        return products
            .filter(p => p.id !== product.id && (p.category === product.category))
            .slice(0, 4);
    }, [product]);

    return (
        <main>
            <Navbar />

            <div className={styles.productContainer}>
                <div className={styles.breadcrumbs}>
                    <Link href="/">Home</Link> / <Link href="/shop">Shop</Link> / {product.name}
                </div>

                <div className={styles.productLayout}>
                    <div className={styles.imageSection}>
                        <img src={product.image} alt={product.name} className={styles.mainImage} />
                        {product.isNew && <span className={styles.pageBadge}>New</span>}
                        {product.isOnSale && <span className={`${styles.pageBadge} ${styles.salePageBadge}`}>Sale</span>}
                    </div>

                    <div className={styles.detailsSection}>
                        <p className={styles.category}>{product.category.toUpperCase()}</p>
                        <h1 className={styles.productName}>{product.name}</h1>

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

                        <p className={styles.description}>{product.description}</p>

                        <div className={styles.sizeSelector}>
                            <h3 className={styles.sectionTitle}>Select Size</h3>
                            <div className={styles.sizeOptions}>
                                {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                                    <button
                                        key={size}
                                        className={`${styles.sizeButton} ${selectedSize === size ? styles.active : ''}`}
                                        onClick={() => setSelectedSize(size)}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className={styles.actions}>
                            <button
                                className="btn btn-primary"
                                style={{ flex: 1 }}
                                onClick={handleAddToCart}
                            >
                                {added ? '✓ Added to Cart!' : 'Add to Cart'}
                            </button>
                            <button className={styles.wishlistBtn}>♡</button>
                        </div>

                        <div className={styles.productInfo}>
                            <details className={styles.accordion}>
                                <summary>Product Details</summary>
                                <ul>
                                    <li>Premium quality materials</li>
                                    <li>Signature leopard print</li>
                                    <li>Made with care</li>
                                </ul>
                            </details>
                            <details className={styles.accordion}>
                                <summary>Shipping & Returns</summary>
                                <p>Free shipping on orders over $200. 30-day returns.</p>
                            </details>
                            <details className={styles.accordion}>
                                <summary>Size Guide</summary>
                                <p>Consult our size chart for the perfect fit.</p>
                            </details>
                        </div>
                    </div>
                </div>

                <section className={styles.relatedSection}>
                    <h2 className={styles.relatedTitle}>You May Also Like</h2>
                    <div className={styles.relatedGrid}>
                        {relatedProducts.map((item) => (
                            <Link key={item.id} href={`/product/${item.id}`} className={styles.relatedCard}>
                                <div className={styles.relatedImageWrapper}>
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div className={styles.relatedInfo}>
                                    <h3>{item.name}</h3>
                                    <p>${item.price}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
}
