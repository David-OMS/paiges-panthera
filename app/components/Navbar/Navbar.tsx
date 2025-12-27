'use client';

import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import { products } from '../../data/products';
import styles from './Navbar.module.css';

export default function Navbar() {
    const router = useRouter();
    const pathname = usePathname();
    const { totalItems } = useCart();
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState<typeof products>([]);
    const searchInputRef = useRef<HTMLInputElement>(null);

    const searchContainerRef = useRef<HTMLDivElement>(null);

    const isHomePage = pathname === '/';

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
                setIsSearchOpen(false);
            }
        }

        if (isSearchOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isSearchOpen]);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
                setIsSearchOpen(false);
            }
        }

        if (isSearchOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isSearchOpen]);

    useEffect(() => {
        if (isSearchOpen && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [isSearchOpen]);

    useEffect(() => {
        if (searchTerm.trim() === '') {
            // Suggest "Available" (random or top items) if empty
            setSuggestions(products.slice(0, 3));
        } else {
            const lowerTerm = searchTerm.toLowerCase();
            const filtered = products.filter(p =>
                p.name.toLowerCase().includes(lowerTerm) ||
                p.category.toLowerCase().includes(lowerTerm)
            ).slice(0, 5);
            setSuggestions(filtered);
        }
    }, [searchTerm]);

    const handleSearchToggle = () => {
        setIsSearchOpen(!isSearchOpen);
        if (!isSearchOpen) setSearchTerm('');
    };

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            router.push(`/shop?search=${encodeURIComponent(searchTerm)}`);
            setIsSearchOpen(false);
        }
    };

    return (
        <nav className={`${styles.navbar} bg-glass`}>
            {/* Left Section */}
            <div className={styles.leftNav}>
                {!isHomePage && !isSearchOpen && (
                    <button onClick={() => router.back()} className={styles.backBtn}>
                        ← Back
                    </button>
                )}
            </div>

            {/* Logo Section - Animates Left */}
            <Link
                href="/"
                className={`${styles.logoWrapper} ${isSearchOpen ? styles.logoSlideLeft : ''}`}
            >
                <div className={styles.logoTextContainer}>
                    <span className={styles.brandName}>PAIGE'S</span>
                    <span className={styles.brandNameHighlight}>PANTHERA</span>
                </div>
            </Link>

            {/* Actions / Search Section */}
            <div className={styles.actions}>
                <div ref={searchContainerRef} className={`${styles.searchContainer} ${isSearchOpen ? styles.searchOpen : ''}`}>
                    <button
                        className={styles.iconBtn}
                        onClick={handleSearchToggle}
                        aria-label="Search"
                    >
                        {isSearchOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                        )}
                    </button>

                    <form onSubmit={handleSearchSubmit} className={styles.searchForm}>
                        <input
                            ref={searchInputRef}
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search..."
                            className={styles.searchInput}
                        />
                    </form>

                    {isSearchOpen && (
                        <div className={styles.suggestionsDropdown}>
                            {suggestions.map(product => (
                                <Link
                                    key={product.id}
                                    href={`/product/${product.id}`}
                                    className={styles.suggestionItem}
                                    onClick={() => setIsSearchOpen(false)}
                                >
                                    <div className={styles.suggestionImageWrapper}>
                                        <img src={product.image} alt={product.name} className={styles.suggestionImage} />
                                    </div>
                                    <div className={styles.suggestionInfo}>
                                        <span className={styles.suggestionName}>{product.name}</span>
                                        <span className={styles.suggestionPrice}>${product.price}</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>

                {!isSearchOpen && (
                    <>
                        <button className={styles.iconBtn} aria-label="Account">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.iconSvg}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        </button>
                        <Link href="/cart" className={styles.iconBtn} aria-label="Cart">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.iconSvg}><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                            {totalItems > 0 && (
                                <span className={styles.cartBadge}>{totalItems}</span>
                            )}
                        </Link>
                    </>
                )}
            </div>
        </nav>
    );
}
