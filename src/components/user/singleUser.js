import { Col, Container,Table, Row,Button, Modal } from "react-bootstrap";
import {useState,useEffect}  from 'react'
import ListDisplay from '../layout/listDisplay'
import TicketManager from '../../services/ticket'
import SendMessageForm from "./sendMessage";
import AddTicketsForm from "./addTicket";
import AddActivityForm from "./addActivity";
import ActivityManager from "../../services/activity";
import MessageManager from "../../services/message";

const ticketManager = new TicketManager()
const activityManager = new ActivityManager()
const messageManager = new MessageManager()

export default function SingleUser(props){

  const [tickets, setTickets] = useState([])
  const [activities, setActivities] = useState([])
  const [messages, setMessages] = useState([])

  const [model,setModel] = useState({
    message:false
  })


  useEffect(()=>{
    setTickets(ticketManager.getTickets())
    setActivities(activityManager.getActivities())
    setMessages(messageManager.getMessages())
  },[])

  return (
    <Modal fullscreen show={props.display} onHide={props.close}>
      <Modal.Header closeButton>

      </Modal.Header>
      <Container>
        <Row>
          <Col sm={6}>
          <h3> {props.user.fullName} </h3>
          </Col>
          <Col sm={6}>
            <Row className="align-items-center">
              <Col>
                <Button> Edit Profile </Button>
              </Col>
              <Col>
                <div>
                  <h2> {props.user.email} </h2>
                  <h2> {props.user.phone} </h2>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col xs={12} sm={6}>
            <ListDisplay items={tickets} child={SingleTicket} model={AddTicketsForm} />
          </Col>
          <Col xs={12} sm={6}>
            <ListDisplay items={activities} child={SingleActivity} model={AddActivityForm} />
          </Col>
        </Row>

        <Row className="justify-content-end my-5">
          <Col xs={6} sm={4} >
            <Button onClick={()=>setModel({message:true})}> Send Message</Button>
            </Col>
        </Row>

        <Table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {
              messages.map((item,index)=>{
                return (
                  <tr key={index}>
                    <td> {item.date} </td>
                    <td> {item.text} </td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>

        <SendMessageForm display={model.message} close={()=>setModel({[`message`]:false})} />
      </Container>

    </Modal>
  )
} 


function SingleTicket(props){
  return(
    <Container fluid>
      <Row>
        <Col>{props.amount} </Col>
        <Col>{props.date} </Col>
      </Row>
    </Container>
  )
}


function SingleActivity(props){
  return(
    <Container fluid>
      <Row className="align-items-center">
        <Col> <h6> {props.game} </h6> </Col>
        <Col> 
          <h4> {props.score} </h4>
          <p> {props.date} </p>
         </Col>
      </Row>
    </Container>
  )
}