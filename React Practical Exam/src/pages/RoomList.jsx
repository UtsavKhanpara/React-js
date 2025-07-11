import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRooms } from '../redux/action/roomActions';
import RoomCard from '../components/RoomCard';
import { Container, Row, Form, Col } from 'react-bootstrap';

const RoomList = () => {
  const dispatch = useDispatch();
  const { rooms } = useSelector((state) => state.rooms);
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [sortType, setSortType] = useState('');
  const [featureFilter, setFeatureFilter] = useState('');
  const [availabilityFilter, setAvailabilityFilter] = useState('');

  useEffect(() => {
    dispatch(fetchRooms());
  }, [dispatch]);

  useEffect(() => {
    filterAndSortRooms();
  }, [rooms, sortType, featureFilter, availabilityFilter]);

  const filterAndSortRooms = () => {
    let updatedRooms = [...rooms];

    // ✅ Filter by feature
    if (featureFilter) {
      updatedRooms = updatedRooms.filter((room) =>
        room.features.includes(featureFilter)
      );
    }

    // ✅ Filter by availability
    if (availabilityFilter) {
      updatedRooms = updatedRooms.filter((room) =>
        availabilityFilter === 'available' ? room.available : !room.available
      );
    }

    // ✅ Sort by type or availability
    if (sortType === 'type') {
      updatedRooms.sort((a, b) => a.type.localeCompare(b.type));
    } else if (sortType === 'availability') {
      updatedRooms.sort((a, b) => b.available - a.available);
    }

    setFilteredRooms(updatedRooms);
  };

  return (
    <Container className="mt-4">
      <h3 className="mb-3">Available Rooms</h3>

      {/* 🔽 Filter & Sort Controls */}
      <Row className="mb-4">
        <Col md={4}>
          <Form.Select value={sortType} onChange={(e) => setSortType(e.target.value)}>
            <option value="">Sort By</option>
            <option value="type">Room Type</option>
            <option value="availability">Availability</option>
          </Form.Select>
        </Col>

        <Col md={4}>
          <Form.Select value={featureFilter} onChange={(e) => setFeatureFilter(e.target.value)}>
            <option value="">Filter by Feature</option>
            <option value="AC">AC</option>
            <option value="TV">TV</option>
            <option value="WiFi">WiFi</option>
            <option value="Fan">Fan</option>
            <option value="Mini Bar">Mini Bar</option>
          </Form.Select>
        </Col>

        <Col md={4}>
          <Form.Select value={availabilityFilter} onChange={(e) => setAvailabilityFilter(e.target.value)}>
            <option value="">Filter by Availability</option>
            <option value="available">Available</option>
            <option value="booked">Booked</option>
          </Form.Select>
        </Col>
      </Row>

      {/* ✅ Room Cards */}
      <Row>
        {filteredRooms.length === 0 ? (
          <p>No rooms found with selected filters.</p>
        ) : (
          filteredRooms.map((room) => <RoomCard key={room.id} room={room} />)
        )}
      </Row>
    </Container>
  );
};

export default RoomList;
