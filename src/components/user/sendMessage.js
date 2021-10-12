
import { Form, Modal, Button } from "react-bootstrap";

//import TicketManager from "../../services/ticket";

//const gameManager = new GameManager()

export default function SendMessageForm(props){

  return (
    <Modal onHide={props.close} show={props.display} >
      <Modal.Header closeButton>
        <Modal.Title> Send Message to {props.user} </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Control type="text" placeholder="Enter Text" />
          </Form.Group>
          <div>
            <Form.Check inline group="method" label="Phone" type="checkbox" />
            <Form.Check inline group="method" label="Email" type="checkbox" />
          </div>
          <Button onClick={props.close} type='submit'> Send  </Button>
        </Form>
      </Modal.Body>
    </Modal>
  )
  
}