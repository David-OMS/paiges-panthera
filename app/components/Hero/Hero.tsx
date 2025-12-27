'use client';

import { useEffect, useState } from 'react';
import styles from './Hero.module.css';

interface Spot {
    id: number;
    x: number;
    y: number;
    size: number;
    delay: number;
    rotation: number;
}

export default function Hero() {
    const [spots, setSpots] = useState<Spot[]>([]);

    useEffect(() => {
        // Generate random spots that will "bleed" onto the screen
        const generatedSpots: Spot[] = [];
        const numSpots = 30; // Number of ink bleed spots

        for (let i = 0; i < numSpots; i++) {
            generatedSpots.push({
                id: i,
                x: Math.random() * 100, // Random x position (%)
                y: Math.random() * 100, // Random y position (%)
                size: 50 + Math.random() * 150, // Random size between 50-200px
                delay: Math.random() * 2.5, // Stagger the appearance
                rotation: Math.random() * 360, // Random rotation
            });
        }

        setSpots(generatedSpots);
    }, []);

    return (
        <section className={styles.hero}>
            <div className={styles.background}>
                {/* Individual ink bleed spots */}
                <div className={styles.inkContainer}>
                    {spots.map((spot) => (
                        <div
                            key={spot.id}
                            className={styles.inkSpot}
                            style={{
                                left: `${spot.x}%`,
                                top: `${spot.y}%`,
                                width: `${spot.size}px`,
                                height: `${spot.size}px`,
                                animationDelay: `${spot.delay}s`,
                                transform: `rotate(${spot.rotation}deg)`,
                            }}
                        />
                    ))}
                </div>

                <div className={styles.gradientBg}></div>
            </div>

            <div className={styles.content}>
                <h1 className={styles.title}>UNLEASH YOUR <span className="text-gold">WILD</span> SIDE</h1>
                <p className={styles.subtitle}>
                    Exclusive leopard print collection for the fearless.
                </p>
                <div className={styles.buttons}>
                    <a href="/shop" className="btn btn-primary">Shop Collection</a>
                    <a href="/world" className="btn btn-outline">Explore World</a>
                </div>
            </div>
        </section>
    );
}
