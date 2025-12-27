import Link from 'next/link';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import styles from './world.module.css';

export default function WorldPage() {
    return (
        <main>
            <Navbar />

            <section className={styles.worldHero}>
                <div className={styles.heroContent}>
                    <p className={styles.subtitle}>Enter the Domain</p>
                    <h1 className={styles.title}>WORLD OF PANTHERA</h1>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.manifesto}>
                    <h2>The Spirit of the Leopard</h2>
                    <p>
                        To explore the World of Panthera is to embrace the untamed.
                        We don't just design prints; we curate a frequency. A frequency of confidence,
                        of mystery, and of absolute presence.
                    </p>
                    <p>
                        Every piece is a chapter in a story of survival and elegance.
                        Born in the wild, refined for the asphalt.
                    </p>
                </div>

                <div className={styles.galleryGrid}>
                    <div className={`${styles.galleryItem} ${styles.item1}`}>
                        <img src="/images/The Midnight Prowl.jpg" alt="The Midnight Prowl" />
                        <span className={styles.imageLabel}>Midnight</span>
                    </div>
                    <div className={`${styles.galleryItem} ${styles.item2}`}>
                        <img src="/images/casual fierce.jpg" alt="Casual Fierce" />
                        <span className={styles.imageLabel}>Casual</span>
                    </div>
                    <div className={`${styles.galleryItem} ${styles.item3}`}>
                        <img src="/images/statement pieces.jpg" alt="Statement Pieces" />
                        <span className={styles.imageLabel}>Statement</span>
                    </div>
                    <div className={`${styles.galleryItem} ${styles.item4}`}>
                        <img src="/images/Savannah Executive.jpg" alt="Savannah Executive" />
                        <span className={styles.imageLabel}>Executive</span>
                    </div>
                    <div className={`${styles.galleryItem} ${styles.item5}`}>
                        <img src="/images/The Social Predator.jpg" alt="The Social Predator" />
                        <span className={styles.imageLabel}>Social</span>
                    </div>
                </div>
            </section>

            <section className={styles.editorialSection}>
                <div className={styles.editorialSplit}>
                    <div className={styles.editorialImage}>
                        <img src="/images/bodycon.jpg" alt="Editorial Look" style={{ width: '100%', borderRadius: '4px' }} />
                    </div>
                    <div className={styles.editorialText}>
                        <h2>Fierce Living, Refined.</h2>
                        <p>
                            Explore our latest editorials where fashion meets the landscape.
                            From neon-drenched cityscapes to the golden hour in the canyon,
                            Panthera is the uniform of the bold.
                        </p>
                        <Link href="/shop" className="btn btn-primary">
                            Explore Current Collection
                        </Link>
                    </div>
                </div>
            </section>

            <section className={styles.quoteSection}>
                <blockquote className={styles.quote}>
                    "Beauty is the beast within, unleashed."
                </blockquote>
            </section>

            <Footer />
        </main>
    );
}
