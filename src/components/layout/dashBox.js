import { Card } from "react-bootstrap";


export default function DashBox(props){
  return (
    <Card style={{width:'100%'}}>
      <Card.Body>
        <Card.Text>
          <h4 className="text-capitalize"> {props.title} </h4>
        </Card.Text>
        <Card.Title className="text-center">
          <h2>{props.text} </h2>
        </Card.Title>

      </Card.Body>
    </Card>
  )
}