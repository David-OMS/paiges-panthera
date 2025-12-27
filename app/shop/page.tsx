'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useMemo, useState, useEffect, Suspense } from 'react';
import Navbar from '../components/Navbar/Navbar';
import ProductGrid from '../components/ProductGrid/ProductGrid';
import Footer from '../components/Footer/Footer';
import { products, Product } from '../data/products';
import styles from './shop.module.css';

function ShopContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const categoryParam = searchParams.get('category');
    const filterParam = searchParams.get('filter');

    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
    const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([]);
    const [sortBy, setSortBy] = useState('Featured');

    // Initialize categories from URL param
    useEffect(() => {
        if (categoryParam && categoryParam !== 'all') {
            setSelectedCategories([categoryParam]);
        } else {
            setSelectedCategories([]);
        }
    }, [categoryParam]);

    // Handle initial filter overrides
    useEffect(() => {
        if (filterParam === 'new') setSortBy('Newest');
    }, [filterParam]);

    const categories = [
        { id: 'dresses', name: 'Dresses' },
        { id: 'accessories', name: 'Accessories' },
        { id: 'evening', name: 'Evening Wear' },
        { id: 'casual', name: 'Casual' },
    ];

    // Handle filtering
    const filteredProducts = useMemo(() => {
        return products.filter(product => {
            // Category filter
            if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
                return false;
            }

            // Featured/Special filters from URL if not using checkboxes
            if (filterParam === 'sale' && !product.isOnSale) return false;
            if (filterParam === 'best-sellers' && !product.isBestSeller) return false;

            // Size filter
            if (selectedSizes.length > 0) {
                const matchesSize = selectedSizes.some(size =>
                    product.sizes.includes(size)
                );
                if (!matchesSize) return false;
            }

            // Price filter
            if (selectedPriceRanges.length > 0) {
                const matchesPrice = selectedPriceRanges.some(range => {
                    if (range === 'Under $100') return product.price < 100;
                    if (range === '$100 - $200') return product.price >= 100 && product.price <= 200;
                    if (range === '$200+') return product.price > 200;
                    return false;
                });
                if (!matchesPrice) return false;
            }

            return true;
        }).sort((a, b) => {
            if (sortBy === 'Price: Low to High') return a.price - b.price;
            if (sortBy === 'Price: High to Low') return b.price - a.price;
            if (sortBy === 'Newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
            return 0; // Featured
        });
    }, [selectedCategories, selectedSizes, selectedPriceRanges, sortBy, filterParam]);

    const toggleCategory = (categoryId: string) => {
        setSelectedCategories(prev =>
            prev.includes(categoryId) ? prev.filter(c => c !== categoryId) : [...prev, categoryId]
        );
    };

    const toggleSize = (size: string) => {
        setSelectedSizes(prev =>
            prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
        );
    };

    const togglePriceRange = (range: string) => {
        setSelectedPriceRanges(prev =>
            prev.includes(range) ? prev.filter(r => r !== range) : [...prev, range]
        );
    };

    const [showMobileFilters, setShowMobileFilters] = useState(false);

    // ... (existing code)

    return (
        <div className={styles.shopContainer}>
            {/* Mobile Filter Toggle */}
            <button
                className={styles.mobileFilterBtn}
                onClick={() => setShowMobileFilters(true)}
            >
                Filter Results
            </button>

            {/* Backdrop for mobile */}
            {showMobileFilters && (
                <div
                    className={styles.backdrop}
                    onClick={() => setShowMobileFilters(false)}
                />
            )}

            <aside className={`${styles.filters} ${showMobileFilters ? styles.mobileFiltersOpen : ''}`}>
                <div className={styles.mobileFilterHeader}>
                    <h3>Filters</h3>
                    <button
                        onClick={() => setShowMobileFilters(false)}
                        className={styles.closeFilterBtn}
                    >
                        ✕
                    </button>
                </div>

                <h3 className={styles.filterTitle}>Filters</h3>

                <div className={styles.filterGroup}>
                    {/* ... existing filter groups ... */}
                    <h4 className={styles.filterLabel}>Category</h4>
                    {categories.map(cat => (
                        <label key={cat.id} className={styles.filterOption}>
                            <input
                                type="checkbox"
                                checked={selectedCategories.includes(cat.id)}
                                onChange={() => toggleCategory(cat.id)}
                            /> {cat.name}
                        </label>
                    ))}
                </div>

                <div className={styles.filterGroup}>
                    <h4 className={styles.filterLabel}>Price</h4>
                    {['Under $100', '$100 - $200', '$200+'].map(range => (
                        <label key={range} className={styles.filterOption}>
                            <input
                                type="checkbox"
                                checked={selectedPriceRanges.includes(range)}
                                onChange={() => togglePriceRange(range)}
                            /> {range}
                        </label>
                    ))}
                </div>

                <div className={styles.filterGroup}>
                    <h4 className={styles.filterLabel}>Size</h4>
                    {['XS', 'S', 'M', 'L', 'XL', 'ONE SIZE', '24', '26', '28', '30', '32'].map(size => (
                        <label key={size} className={styles.filterOption}>
                            <input
                                type="checkbox"
                                checked={selectedSizes.includes(size)}
                                onChange={() => toggleSize(size)}
                            /> {size}
                        </label>
                    ))}
                </div>
            </aside>

            <div className={styles.productsSection}>
                <div className={styles.sortBar}>
                    <div className={styles.activeFilters}>
                        <p className={styles.resultCount}>
                            {filteredProducts.length} products found
                        </p>
                        {selectedCategories.length > 0 && (
                            <button
                                className={styles.clearBtn}
                                onClick={() => {
                                    setSelectedCategories([]);
                                }}
                            >
                                Clear All
                            </button>
                        )}
                    </div>
                    <select
                        className={styles.sortSelect}
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                    >
                        <option>Featured</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                        <option>Newest</option>
                    </select>
                </div>

                <ProductGrid products={filteredProducts} />
            </div>
        </div>
    );
}

export default function ShopPage() {
    return (
        <main>
            <Navbar />

            <section className={styles.shopHero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.title}>Shop Collection</h1>
                    <p className={styles.subtitle}>Fierce luxury for the fearless</p>
                </div>
            </section>

            <Suspense fallback={<div className="container">Loading products...</div>}>
                <ShopContent />
            </Suspense>

            <Footer />
        </main>
    );
}
