
import { Form, Modal, Button } from "react-bootstrap";

//import TicketManager from "../../services/ticket";

//const gameManager = new GameManager()

export default function AddGameForm(props){

  return (
    <Modal onHide={props.close} show={props.display} >
      <Modal.Header closeButton>
        <Modal.Title> Add Game </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Control type="file" placeholder="Select Image" />
          </Form.Group>
          <Form.Group>
            <Form.Control type="text" placeholder="Enter Text" />
          </Form.Group>
          <Button onClick={props.close}> Add  </Button>
        </Form>
      </Modal.Body>
    </Modal>
  )
  
}