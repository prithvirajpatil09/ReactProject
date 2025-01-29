import SubCategoriesCard from "./SubCategoriesCard";
import "../SubCategoriesCard.css"
import { useLocation } from "react-router-dom";
import CategoriesCard from "./CatergoriesCard";

export default function SubCategories() {
    const tourPackages = [
        {
            image: "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3dlZGVufGVufDB8fDB8fHww",
            title: "Swiss Alps Adventure",
            description: "Explore the breathtaking beauty of the Swiss Alps, with scenic views and thrilling adventures.",
            price: "₹ 2,500",
            availability: "Available"
        },
        {
            image: "https://plus.unsplash.com/premium_photo-1661919210043-fd847a58522d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFyaXN8ZW58MHx8MHx8fDA%3D",
            title: "Paris City Tour",
            description: "Discover the charm of Paris, the city of lights, and indulge in its cultural delights.",
            price: "₹ 1,800",
            availability: "Few spots left"
        },
        {
            image: "https://images.unsplash.com/photo-1533604848340-30ce9aeeb0be?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJvbWUlMjB0fGVufDB8fDB8fHww",
            title: "Rome Historical Journey",
            description: "Dive into the rich history of Rome, its ancient sites, and captivating stories.",
            price: "₹ 2,200",
            availability: "Sold Out"
        }
    ];
    const location = useLocation();
    let category = location.state?.title
    category = category.split(" ")[0];
    return (
        <div className="europe-tour-container">
            <div className="header">
                <div className="overlay"></div>
                <h1 className="tour-name">{category}</h1>
            </div>
            <div className="tour-details  ">
                {tourPackages.map((packageData, index) => (
                    <div key={index} className="w-full sm:w-1/2 md:w-1/3">
                        <SubCategoriesCard {...packageData} />
                    </div>
                ))}
            </div>
        </div>
    );
};

