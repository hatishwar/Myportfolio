import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Mycard(props) {
  return (
    <Card>
      {/* <Card.Img variant="top" src="https://placehold.co/200x200" /> */}
      <Card.Img variant="top" src={props.myimg} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.text}
        </Card.Text>
        <a href={props.srclink} target='_blank'><Button variant="primary">{props.codebtn}</Button></a>
        <a href={props.livelink} target='_blank'><Button variant="dark">{props.livebtn}</Button></a>
      </Card.Body>
    </Card>
  );
}

export default Mycard;