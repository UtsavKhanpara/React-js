import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchReservations,
  deleteReservation,
  updateReservation,
} from '../redux/action/reservationActions';
import { fetchRooms } from '../redux/action/roomActions';
import { Table, Button, Container } from 'react-bootstrap';

const ReservationList = () => {
  const dispatch = useDispatch();
  const { reservations } = useSelector((state) => state.reservations);
  const { rooms } = useSelector((state) => state.rooms);

  useEffect(() => {
    dispatch(fetchReservations());
    dispatch(fetchRooms()); // ✅ Fetch rooms to get room type
  }, [dispatch]);

  const handleCancel = (id) => {
    if (window.confirm('Are you sure you want to cancel this reservation?')) {
      dispatch(deleteReservation(id));
    }
  };

  const handleUpdate = (reservation) => {
    const name = prompt('Enter guest name:', reservation.name);
    const email = prompt('Enter guest email:', reservation.email);
    const checkIn = prompt('Enter check-in date (YYYY-MM-DD):', reservation.checkIn);
    const checkOut = prompt('Enter check-out date (YYYY-MM-DD):', reservation.checkOut);
    const roomId = parseInt(prompt('Enter Room Type:', reservation.roomId));

    if (name && email && checkIn && checkOut && roomId) {
      const updatedData = { ...reservation, name, email, checkIn, checkOut, roomId };
      dispatch(updateReservation(reservation.id, updatedData));
    }
  };

  const getRoomType = (roomId) => {
    const room = rooms.find((r) => r.id === roomId);
    return room ? room.type : 'Unknown Room';
  };

  return (
    <Container className="mt-4">
      <h3 className="mb-3">All Reservations</h3>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Guest Name</th>
            <th>Email</th>
            <th>Room Type</th>
            <th>Check-In</th>
            <th>Check-Out</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {reservations.length === 0 ? (
            <tr>
              <td colSpan="6" className="text-center">No reservations found.</td>
            </tr>
          ) : (
            reservations.map((r) => (
              <tr key={r.id}>
                <td>{r.name}</td>
                <td>{r.email}</td>
                <td>{getRoomType(r.roomId)}</td>
                <td>{r.checkIn}</td>
                <td>{r.checkOut}</td>
                <td>
                  <Button variant="warning" size="sm" onClick={() => handleUpdate(r)}>
                    Edit
                  </Button>{' '}
                  <Button variant="danger" size="sm" onClick={() => handleCancel(r.id)}>
                    Cancel
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </Container>
  );
};

export default ReservationList;
