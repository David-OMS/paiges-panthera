import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.column}>
                        <h4>Help & Info</h4>
                        <ul className={styles.linkList}>
                            <li><Link href="/shipping">Shipping & Returns</Link></li>
                            <li><Link href="/faq">FAQs</Link></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h4>About Paige's</h4>
                        <ul className={styles.linkList}>
                            <li><Link href="/about">Our Story</Link></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h4>Shop</h4>
                        <ul className={styles.linkList}>
                            <li><Link href="/shop">All Products</Link></li>
                            <li><Link href="/shop?filter=new">New Arrivals</Link></li>
                            <li><Link href="/shop?filter=sale">Sale</Link></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h4>Social</h4>
                        <ul className={styles.linkList}>
                            <li><a href="https://instagram.com" target="_blank" rel="noopener">Instagram</a></li>
                            <li><a href="https://tiktok.com" target="_blank" rel="noopener">TikTok</a></li>
                            <li><a href="https://facebook.com" target="_blank" rel="noopener">Facebook</a></li>
                        </ul>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; 2025 Paige's Panthera. All rights reserved.</p>
                    <p>Privacy Policy | Terms & Conditions</p>
                </div>
            </div>
        </footer>
    );
}
