import { useEffect, useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";

import GameManager from "../../services/games";

const gameManager = new GameManager()

export default function AddActivityForm(props){

  const [games,setGames] = useState([])

  useEffect(()=>{
    setGames(gameManager.getGames())
  },[])

  return (
    <Modal onHide={props.close} show={props.display} >
      <Modal.Header closeButton>
        <Modal.Title> Add Activities </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Control placeholder="Enter Score" />
          </Form.Group>

          <Form.Select>
            {
              games.map((game,index)=>{
                return (
                  <option key={index} value={index}> {game.title} </option>
                )
              })
            }
          </Form.Select>
          <Button onClick={props.close}> Add  </Button>
        </Form>
      </Modal.Body>
    </Modal>
  )
  
}