import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import styles from './about.module.css';

export default function AboutPage() {
    return (
        <main>
            <Navbar />

            <section className={styles.aboutHero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.title}>Our Story</h1>
                    <p className={styles.subtitle}>Fierce. Fearless. Forward.</p>
                </div>
            </section>

            <section className={styles.storySection}>
                <div className={styles.container}>
                    <div className={styles.textContent}>
                        <h2>Born from the Jungle</h2>
                        <p>
                            Paige's Panthera was founded on a simple principle: luxury should be as bold as the women who wear it.
                            Inspired by the raw power and elegance of the wild, we specialize in premium leopard print pieces that
                            command attention.
                        </p>
                        <p>
                            Our collections are designed for the modern trailblazer who isn't afraid to stand out.
                            We blend timeless silhouettes with high-fashion aesthetics to create a look that is uniquely Paige.
                        </p>
                    </div>
                    <div className={styles.imageContent}>
                        <img src="/images/evening-wear.jpg" alt="Our Heritage" />
                    </div>
                </div>
            </section>

            <section className={styles.valuesSection}>
                <div className={styles.container}>
                    <div className={styles.value}>
                        <h3>Quality</h3>
                        <p>We source only the finest fabrics to ensure every piece feels as good as it looks.</p>
                    </div>
                    <div className={styles.value}>
                        <h3>Empowerment</h3>
                        <p>Our designs are built to boost confidence and celebrate individual strength.</p>
                    </div>
                    <div className={styles.value}>
                        <h3>Sustainability</h3>
                        <p>We are committed to ethical manufacturing and reducing our environmental pawprint.</p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
