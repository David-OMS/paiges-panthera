import Link from 'next/link';
import styles from './EditorialSection.module.css';

export default function EditorialSection() {
    const editorials = [
        {
            id: 1,
            title: 'Evening Glamour',
            subtitle: 'Shine after dark',
            image: '/images/The Midnight Prowl.jpg',
            href: '/shop-the-look',
        },
        {
            id: 2,
            title: 'Casual Fierce',
            subtitle: 'Everyday luxury',
            image: '/images/casual fierce.jpg',
            href: '/shop-the-look',
        },
        {
            id: 3,
            title: 'Statement Pieces',
            subtitle: 'Bold accessories',
            image: '/images/statement pieces.jpg',
            href: '/shop-the-look',
        },
    ];

    return (
        <section id="editorial" className={styles.editorial}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Shop The Look</h2>

                <div className={styles.grid}>
                    {editorials.map((item) => (
                        <Link
                            key={item.id}
                            href={item.href}
                            className={styles.editorialCard}
                        >
                            <div className={styles.imageWrapper}>
                                <img src={item.image} alt={item.title} className={styles.image} />
                                <div className={styles.overlay}></div>
                            </div>
                            <div className={styles.content}>
                                <h3 className={styles.title}>{item.title}</h3>
                                <p className={styles.subtitle}>{item.subtitle}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
