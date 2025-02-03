import SubCategoriesCard from "./SubCategoriesCard";
import "../SubCategoriesCard.css"
import { useLocation } from "react-router-dom";
// import CategoriesCard from "./CatergoriesCard";

export default function SubCategories() {
    const tourPackages = {
        international: [
            {
                image: "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3dlZGVufGVufDB8fDB8fHww",
                title: "Switzerland",
                description: "Experience the majestic Swiss Alps, famous for skiing, scenic train journeys, and breathtaking landscapes.",
                price: "₹ 2,500",
            },
            {
                image: "https://plus.unsplash.com/premium_photo-1661919210043-fd847a58522d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFyaXN8ZW58MHx8MHx8fDA%3D",
                title: "France",
                description: "Explore Paris, the heart of France, known for the Eiffel Tower, world-class museums, and exquisite cuisine.",
                price: "₹ 1,800",
            },
            {
                image: "https://images.unsplash.com/photo-1533604848340-30ce9aeeb0be?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJvbWUlMjB0fGVufDB8fDB8fHww",
                title: "Italy",
                description: "Discover the ancient wonders of Rome, from the Colosseum to the Vatican City, in the heart of Italy.",
                price: "₹ 2,200",
            }
        ],
        domestic: [
            {
                image: "https://images.unsplash.com/photo-1608287843042-1960acbe88ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a29ua2FufGVufDB8fDB8fHww",
                title: "Kashmir",
                description: "Visit the paradise on Earth, Kashmir, with its scenic mountains, lakes, and houseboats.",
                price: "₹ 1,500",
            },
            {
                image: "https://images.unsplash.com/photo-1576923261897-0263fdf1f954?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8R2FvJTIwSW5kaWF8ZW58MHx8MHx8fDA%3D",
                title: "Goa",
                description: "Enjoy the golden beaches, vibrant nightlife, and Portuguese heritage in the coastal paradise of Goa.",
                price: "₹ 1,200",
            },
            {
                image: "https://images.unsplash.com/photo-1523323288669-1bfc02a0b6b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8SmFpcHVyfGVufDB8fDB8fHww",
                title: "Jaipur",
                description: "Experience the royal heritage of Rajasthan by visiting the Pink City, Jaipur, with its palaces and forts.",
                price: "₹ 1,000",
            }
        ]
    };
    
    const location = useLocation();
    let category = location.state?.title
    category = category.split(" ")[0];
    let abc = category.toLowerCase();
    const selectedPackages = tourPackages[abc] || [];
    return (
        <div className="subcategories-tour-container">
            <div className="header">
                <div className="overlay"></div>
                <h1 className="tour-name">{category}</h1>
            </div>
            <div className="subcategories-details flex flex-wrap">
                {selectedPackages.map((packageData, index) => (
                    <div key={index} className="w-full sm:w-1/2 md:w-1/3 p-4">
                        <SubCategoriesCard {...packageData} />
                    </div>
                ))}
            </div>
        </div>
    );
};

