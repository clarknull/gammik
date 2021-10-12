import { Card } from "react-bootstrap";


export default function SingleGame(props){
  return (
    <Card>
      <Card.Img src={props.img} />
      <Card.Body>
        <Card.Title>
          {props.title}
        </Card.Title>
      </Card.Body>

    </Card>
  )
}