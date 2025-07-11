import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRooms } from '../redux/action/roomActions';
import { Container, Card, Spinner } from 'react-bootstrap';

const RoomDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { rooms, loading } = useSelector((state) => state.rooms);
  const [room, setRoom] = useState(null);

  useEffect(() => {
    dispatch(fetchRooms());
  }, [dispatch]);

  useEffect(() => {
    if (rooms.length > 0) {
      const foundRoom = rooms.find((r) => String(r.id) === id); // match string to string
      setRoom(foundRoom);
    }
  }, [rooms, id]);

  console.log("🧠 Rooms:", rooms);
  console.log("🔍 Param ID:", id);
  console.log("✅ Found Room:", room);

  if (loading || !room) {
    return (
      <Container className="mt-4 text-center">
        <Spinner animation="border" variant="primary" />
        <p className="mt-2">Loading...</p>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <Card>
        <Card.Img variant="top" src={room.image} />
        <Card.Body>
          <Card.Title>{room.type}</Card.Title>
          <Card.Text>
            Price: ₹{room.price} <br />
            Features: {room.features.join(', ')} <br />
            Status: {room.available ? 'Available' : 'Booked'}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default RoomDetails;
