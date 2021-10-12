
import { Form, Modal, Button } from "react-bootstrap";

//import TicketManager from "../../services/ticket";

//const gameManager = new TicketManager()

export default function AddTicketsForm(props){

  return (
    <Modal onHide={props.close} show={props.display} >
      <Modal.Header closeButton>
        <Modal.Title> Add Ticket </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Control type="number" placeholder="Enter Amount" />
          </Form.Group>
          <Button onClick={props.close} > Add  </Button>
        </Form>
      </Modal.Body>
    </Modal>
  )
  
}