import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards() {
  return (
    <Card style={{ width: '18rem' }}  className="hover:scale-[102%]">
      <Card.Img variant="top" src="cigarbox.png" className='bg-red-100'/>
      <Card.Body>
        <Card.Title>Product</Card.Title>
        <Card.Text>
          To show some of the details of the product which we want to show.
        </Card.Text>
        <Button variant="primary">Some Action</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;