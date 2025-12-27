import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import FeaturedCollection from './components/FeaturedCollection/FeaturedCollection';
import BestSellers from './components/BestSellers/BestSellers';
import CategoryFilter from './components/CategoryFilter/CategoryFilter';
import SaleSection from './components/SaleSection/SaleSection';
import EditorialSection from './components/EditorialSection/EditorialSection';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FeaturedCollection />
      <BestSellers />
      <SaleSection />
      <CategoryFilter />
      <EditorialSection />
      <Newsletter />
      <Footer />
    </main>
  );
}
