import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardTile() {
  return (
    <Card style={{ width: '18rem',padding: '10px', margin: '10px' }}>
      <Card.Img variant="top" src="/space.jpg" />
      <Card.Body>
        <Card.Title>Event</Card.Title>
        <Card.Text>
          Lets say the Event info goes here, like a brief info about the event.
        </Card.Text>
        <Button variant="primary">View Details</Button>
      </Card.Body>
    </Card>
  );
}

export default CardTile;