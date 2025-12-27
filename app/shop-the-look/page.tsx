'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { useCart } from '../context/CartContext';
import styles from './shop-the-look.module.css';

const looks = [
    {
        id: 1,
        name: 'The Midnight Prowl',
        image: '/images/The Midnight Prowl.jpg',
        description: 'A fierce combination for a night out under the stars. This look blends our signature leopard silk with high-shine gold accents.',
        combinations: 'Signature Leopard + Polished Gold + Onyx Silk',
        items: [
            { id: 1, name: 'Leopard Silk Dress', price: 199 },
            { id: 2, name: 'Gold Chain Belt', price: 59 },
            { id: 6, name: 'Evening Clutch', price: 79 },
        ]
    },
    {
        id: 2,
        name: 'Savannah Executive',
        image: '/images/Savannah Executive.jpg',
        description: 'Effortless style for the modern wanderer. Sharp tailoring meets the raw energy of the plains.',
        combinations: 'Cotton Twill + Graphic Prints + Sustainable Denim',
        items: [
            { id: 7, name: 'Leopard Blazer', price: 199 },
            { id: 9, name: 'Casual Panther Tee', price: 45 },
            { id: 10, name: 'High-Waist Leopard Jeans', price: 120 },
        ]
    },
    {
        id: 3,
        name: 'The Social Predator',
        image: '/images/The Social Predator.jpg',
        description: 'Make an entrance in our boldest signature prints. Form-fitting elegance designed to command the room.',
        combinations: 'Stretch Lycra + Statement Jewelry + Panthera Motif',
        items: [
            { id: 3, name: 'Leopard Bodycon', price: 99 },
            { id: 8, name: 'Gold Necklace', price: 149 },
        ]
    }
];

export default function ShopTheLookPage() {
    const { addToCart } = useCart();
    const [addedLookId, setAddedLookId] = useState<number | null>(null);

    const handleAddLook = (look: typeof looks[0]) => {
        look.items.forEach(item => {
            // Defaulting to S for clothes, ONE SIZE for accessories
            const size = item.name.toLowerCase().includes('clutch') || item.name.toLowerCase().includes('belt') || item.name.toLowerCase().includes('necklace') ? 'ONE SIZE' : 'S';

            addToCart({
                id: item.id,
                name: item.name,
                price: item.price,
                image: look.image, // Using the look image as a fallback
                size: size
            });
        });

        setAddedLookId(look.id);
        setTimeout(() => setAddedLookId(null), 3000);
    };

    return (
        <main>
            <Navbar />

            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.title}>Shop The Look</h1>
                    <p className={styles.subtitle}>Curated combinations from the collection</p>
                </div>
            </section>

            <div className={styles.looksContainer}>
                {looks.map((look) => (
                    <div key={look.id} className={styles.lookCard}>
                        <div className={styles.imageSection}>
                            <img src={look.image} alt={look.name} className={styles.lookImage} />
                            <div className={styles.combinationBadge}>
                                <span>Combinations:</span>
                                <p>{look.combinations}</p>
                            </div>
                        </div>

                        <div className={styles.infoSection}>
                            <h2 className={styles.lookName}>{look.name}</h2>
                            <p className={styles.lookDescription}>{look.description}</p>

                            <div className={styles.itemsList}>
                                <h3 className={styles.itemsTitle}>Items in this look:</h3>
                                {look.items.map((item) => (
                                    <Link key={item.id} href={`/product/${item.id}`} className={styles.itemLink}>
                                        <span className={styles.itemName}>{item.name}</span>
                                        <span className={styles.itemPrice}>${item.price}</span>
                                    </Link>
                                ))}
                            </div>

                            <div className={styles.lookActions}>
                                <button
                                    className="btn btn-primary"
                                    onClick={() => handleAddLook(look)}
                                >
                                    {addedLookId === look.id ? '✓ Look Added' : 'Purchase Full Look'}
                                </button>
                                <Link href="/shop" className="btn btn-outline">
                                    Browse Collection
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <Footer />
        </main>
    );
}
