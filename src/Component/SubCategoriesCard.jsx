import React from 'react';
import "../SubCategoriesCard.css";
import { Button, Card } from 'react-bootstrap';

// Reusable TourPackageCard Component
export default function SubCategoriesCard({ image, title, description, price, availability }) {
    return (
        <Card style={{ width: '18rem', margin: '1rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                
                <Card.Text>{price }</Card.Text>
                <Card.Text>{availability}</Card.Text>
                
                <Button variant="primary"  >
                    Explore
                </Button>
            </Card.Body>
        </Card>
    );
};