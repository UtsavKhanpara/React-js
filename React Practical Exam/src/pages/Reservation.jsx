import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { addReservation } from '../redux/action/reservationActions';
import { fetchRooms } from '../redux/action/roomActions';
import { Container, Form, Button } from 'react-bootstrap';

const ReservationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { rooms } = useSelector((state) => state.rooms);
  const roomId = location.state?.roomId || '';

  const [form, setForm] = useState({
    name: '',
    email: '',
    roomId: roomId,
    checkIn: '',
    checkOut: ''
  });

  useEffect(() => {
    dispatch(fetchRooms());
  }, [dispatch]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addReservation(form));
    navigate('/reservations');
  };

  return (
    <Container className="mt-4">
      <h3 className="mb-3">Make a Reservation</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Full Name</Form.Label>
          <Form.Control name="name" value={form.name} onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" name="email" value={form.email} onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Select Room</Form.Label>
          <Form.Select name="roomId" value={form.roomId} onChange={handleChange} required>
            <option value="">-- Select Room --</option>
            {rooms.map((room) => (
              <option key={room.id} value={room.id}>
                {room.type} (₹{room.price})
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Check-In Date</Form.Label>
          <Form.Control type="date" name="checkIn" value={form.checkIn} onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Check-Out Date</Form.Label>
          <Form.Control type="date" name="checkOut" value={form.checkOut} onChange={handleChange} required />
        </Form.Group>

        <Button type="submit" variant="primary">Reserve</Button>
      </Form>
    </Container>
  );
};

export default ReservationForm;
