'use client';

import Link from 'next/link';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import styles from './cart.module.css';

export default function CartPage() {
    const { items, removeFromCart, updateQuantity, updateSize, totalPrice, clearCart } = useCart();

    if (items.length === 0) {
        return (
            <main>
                <Navbar />
                <div className={styles.emptyCart}>
                    <h1>Your Cart is Empty</h1>
                    <p>Add some fierce pieces to get started!</p>
                    <Link href="/shop" className="btn btn-primary">Shop Now</Link>
                </div>
                <Footer />
            </main>
        );
    }

    return (
        <main>
            <Navbar />

            <div className={styles.cartContainer}>
                <h1 className={styles.title}>Shopping Cart</h1>

                <div className={styles.cartLayout}>
                    <div className={styles.itemsList}>
                        {items.map((item) => (
                            <div key={`${item.id}-${item.size}`} className={styles.cartItem}>
                                <img src={item.image} alt={item.name} className={styles.itemImage} />

                                <div className={styles.itemDetails}>
                                    <h3 className={styles.itemName}>{item.name}</h3>

                                    <div className={styles.sizeSelector}>
                                        <label htmlFor={`size-${item.id}-${item.size}`}>Size:</label>
                                        <select
                                            id={`size-${item.id}-${item.size}`}
                                            value={item.size}
                                            onChange={(e) => updateSize(item.id, item.size, e.target.value)}
                                            className={styles.sizeSelect}
                                        >
                                            {(() => {
                                                const product = products.find(p => p.id === item.id);
                                                return product?.sizes.map(size => (
                                                    <option key={size} value={size}>{size}</option>
                                                )) || <option value={item.size}>{item.size}</option>;
                                            })()}
                                        </select>
                                    </div>

                                    <p className={styles.itemPrice}>${item.price}</p>
                                </div>

                                <div className={styles.itemActions}>
                                    <div className={styles.quantityControl}>
                                        <button
                                            onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                                            className={styles.quantityBtn}
                                        >
                                            −
                                        </button>
                                        <span className={styles.quantity}>{item.quantity}</span>
                                        <button
                                            onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                                            className={styles.quantityBtn}
                                        >
                                            +
                                        </button>
                                    </div>

                                    <button
                                        onClick={() => removeFromCart(item.id, item.size)}
                                        className={styles.removeBtn}
                                    >
                                        Remove
                                    </button>
                                </div>

                                <p className={styles.itemTotal}>${item.price * item.quantity}</p>
                            </div>
                        ))}
                    </div>

                    <div className={styles.summary}>
                        <h2 className={styles.summaryTitle}>Order Summary</h2>

                        <div className={styles.summaryRow}>
                            <span>Subtotal</span>
                            <span>${totalPrice}</span>
                        </div>
                        <div className={styles.summaryRow}>
                            <span>Shipping</span>
                            <span>FREE</span>
                        </div>
                        <div className={styles.summaryRow}>
                            <span>Tax</span>
                            <span>Calculated at checkout</span>
                        </div>

                        <div className={styles.summaryTotal}>
                            <span>Total</span>
                            <span>${totalPrice}</span>
                        </div>

                        <Link href="/checkout" className="btn btn-primary" style={{ width: '100%', marginBottom: '12px' }}>
                            Proceed to Checkout
                        </Link>
                        <Link href="/shop" className="btn btn-outline" style={{ width: '100%' }}>
                            Continue Shopping
                        </Link>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
