export interface Product {
    id: number;
    name: string;
    price: number;
    originalPrice?: number;
    image: string;
    category: string;
    description: string;
    isNew?: boolean;
    isOnSale?: boolean;
    isBestSeller?: boolean;
    sizes: string[];
    stock: number;
}

export const products: Product[] = [
    {
        id: 1,
        name: "Leopard Silk Dress",
        price: 199,
        originalPrice: 299,
        image: "/images/leopard silk dress.jpg",
        category: "evening",
        description: "Luxurious silk dress with leopard print. Perfect for evening events.",
        isNew: true,
        isOnSale: true,
        isBestSeller: true,
        sizes: ["XS", "S", "M", "L", "XL"],
        stock: 3, // Low stock
    },
    {
        id: 2,
        name: "Gold Chain Belt",
        price: 59,
        originalPrice: 89,
        image: "/images/gold chain belt.jpg",
        category: "accessories",
        description: "Statement gold chain belt to elevate any outfit.",
        isNew: true,
        isOnSale: true,
        sizes: ["S", "M", "L"],
        stock: 15,
    },
    {
        id: 3,
        name: "Leopard Bodycon",
        price: 99,
        originalPrice: 159,
        image: "/images/bodycon.jpg",
        category: "dresses",
        description: "Form-fitting bodycon dress in signature leopard print.",
        isNew: true,
        isOnSale: true,
        isBestSeller: true,
        sizes: ["XS", "S", "M"],
        stock: 7, // Low stock
    },
    {
        id: 4,
        name: "Leopard Maxi Dress",
        price: 249,
        image: "/images/maxi.jpg",
        category: "dresses",
        description: "Flowing maxi dress for effortless elegance.",
        isNew: true,
        isOnSale: false,
        sizes: ["S", "M", "L", "XL"],
        stock: 42,
    },
    {
        id: 5,
        name: "Statement Earrings",
        price: 39,
        originalPrice: 69,
        image: "/images/statement earrings.jpg",
        category: "accessories",
        description: "Bold statement earrings with a touch of gold.",
        isNew: false,
        isOnSale: true,
        sizes: ["ONE SIZE"],
        stock: 2, // Low stock
    },
    {
        id: 6,
        name: "Evening Clutch",
        price: 79,
        originalPrice: 129,
        image: "/images/evening clutch.jpg",
        category: "accessories",
        description: "Elegant evening clutch to complete your look.",
        isNew: false,
        isOnSale: true,
        sizes: ["ONE SIZE"],
        stock: 8, // Low stock
    },
    {
        id: 7,
        name: "Leopard Blazer",
        price: 199,
        image: "/images/blazer.jpg",
        category: "evening",
        description: "Sharp leopard print blazer for a fierce professional look.",
        isNew: true,
        isOnSale: false,
        isBestSeller: true,
        sizes: ["S", "M", "L", "XL"],
        stock: 25,
    },
    {
        id: 8,
        name: "Gold Necklace",
        price: 149,
        image: "/images/gold necklace.jpg",
        category: "accessories",
        description: "Exquisite gold necklace with a centerpiece.",
        isNew: true,
        isOnSale: false,
        sizes: ["ONE SIZE"],
        stock: 12,
    },
    {
        id: 9,
        name: "Casual Panther Tee",
        price: 45,
        image: "/images/casual tee.jpg",
        category: "casual",
        description: "Comfortable panther graphic tee for everyday wear.",
        isNew: false,
        isOnSale: false,
        sizes: ["XS", "S", "M", "L", "XL"],
        stock: 50,
    },
    {
        id: 10,
        name: "High-Waist Leopard Jeans",
        price: 120,
        image: "/images/highwaist jean.jpg",
        category: "casual",
        description: "Iconic high-waist jeans in our signature leopard print.",
        isNew: true,
        isOnSale: false,
        isBestSeller: true,
        sizes: ["24", "26", "28", "30", "32"],
        stock: 5, // Low stock
    },
];
