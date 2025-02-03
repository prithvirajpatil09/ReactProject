import React from 'react';
import "../SubCategoriesCard.css";
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


export default function SubCategoriesCard({ image, title, description  }) {
    const navigation = useNavigate();

    const handlenavigation = () => {
        navigation('/tourcatergories', { state: { title ,image } })
    }
    return (
        <Card className="package-card">
            <Card.Img variant="top" src={image} className="package-image" />
            <Card.Body className="package-description">
                <Card.Title className="package-title">{title}</Card.Title>
                <Card.Text className="package-text">{description}</Card.Text>
                
                
                <Button variant="primary" className="explore-btn" onClick={handlenavigation}>
                    Explore
                </Button>
            </Card.Body>
        </Card>

    );
};