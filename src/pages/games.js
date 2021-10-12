import { useEffect, useState } from "react";
import { Container,Button, Row, Col } from "react-bootstrap";
import AddGameForm from "../components/game/addGame";
import SingleGame from "../components/game/single";
import GameManager from "../services/games";

const gameManager = new GameManager()

export default function GamesPage(props){


  const [games, setGames] = useState([])
  const [model, setModel] = useState(false)
  

  useEffect(()=>{
    setGames(gameManager.getGames())
  },[])

  return (
    <Container>
      <h1> All Games </h1>
      <Row className="justify-content-end">
        <Col className="text-right" xs={6} sm={3}>
          <Button onClick={()=>{setModel(true)}}>Add</Button>
        </Col>
      </Row>
      <Row>
        {
          games.map((game,index)=>{
            return (
              <Col key={index} xs={12} sm={6} md={4} lg={3}>
                <SingleGame {...game} />
              </Col>
            )
          })
        }
      </Row>

      <AddGameForm display={model} close={()=>setModel(false)}  />
    </Container>
  )
} 