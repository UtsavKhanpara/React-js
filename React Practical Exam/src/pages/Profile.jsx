import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Card } from 'react-bootstrap';

const Profile = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <Container className="mt-4">
      <h3 className="mb-3">User Profile</h3>
      {user ? (
        <Card>
          <Card.Body>
            <Card.Title>👤 {user}</Card.Title>
            <Card.Text>
              <strong>Username:</strong> {user} <br />
              <strong>Role:</strong> Admin <br />
              <strong>Email:</strong> {user.toLowerCase()}@hotel.com
            </Card.Text>
          </Card.Body>
        </Card>
      ) : (
        <p>Please login to view your profile.</p>
      )}
    </Container>
  );
};

export default Profile;
