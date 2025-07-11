import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const RoomCard = ({ room }) => {
  const navigate = useNavigate();

  return (
    <Col sm={12} md={6} lg={4} className="mb-4">
      <Card>
        <Card.Img variant="top" src={room.image} />
        <Card.Body>
          <Card.Title>{room.type}</Card.Title>
          <Card.Text>
            Price: ₹{room.price} <br />
            Features: {room.features.join(', ')} <br />
            Status: {room.available ? 'Available' : 'Booked'}
          </Card.Text>
          <Button variant="primary" onClick={() => navigate(`/room/${room.id}`)}>
            View Details
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default RoomCard;
