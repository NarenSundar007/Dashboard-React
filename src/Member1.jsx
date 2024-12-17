import Card from 'react-bootstrap/Card';

function Member1() {
  return (
    <div style={{
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center'
    }}>
      <Card style={{ 
        width: '18rem',
        padding: '10px', 
        margin: '20px', 
        borderRadius: '10px',
        textAlign: 'center' 
      }}>
        <div className="d-flex justify-content-center mb-3">
          <Card.Img 
            variant="top" 
            src="/profile.jpg" 
            style={{
              width: '10rem', 
              borderRadius: '50%',
              objectFit: 'cover'
            }}
          />
        </div>
        <Card.Body>
          <Card.Title>Member1</Card.Title>
          <Card.Text>
            His/Her Role
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ 
        width: '18rem',
        padding: '10px', 
        margin: '20px', 
        borderRadius: '10px',
        textAlign: 'center' 
      }}>
        <div className="d-flex justify-content-center mb-3">
          <Card.Img 
            variant="top" 
            src="/profile.jpg" 
            style={{
              width: '10rem', 
              borderRadius: '50%',
              objectFit: 'cover'
            }}
          />
        </div>
        <Card.Body>
          <Card.Title>Member2</Card.Title>
          <Card.Text>
            His/Her Role
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Member1;