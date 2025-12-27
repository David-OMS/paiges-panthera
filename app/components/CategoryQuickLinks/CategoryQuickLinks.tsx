import Link from 'next/link';
import styles from './CategoryQuickLinks.module.css';

export default function CategoryQuickLinks() {
    const categories = [
        { name: 'New Arrivals', href: '/shop?filter=new' },
        { name: 'Dresses', href: '/shop?category=dresses' },
        { name: 'Accessories', href: '/shop?category=accessories' },
        { name: 'Evening Wear', href: '/shop?category=evening' },
        { name: 'Sale', href: '/shop?filter=sale' },
    ];

    return (
        <section className={styles.quickLinks}>
            <div className={styles.container}>
                {categories.map((category) => (
                    <Link
                        key={category.name}
                        href={category.href}
                        className={styles.categoryLink}
                    >
                        {category.name}
                    </Link>
                ))}
            </div>
        </section>
    );
}
