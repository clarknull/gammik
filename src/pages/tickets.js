import { useEffect, useState } from "react";
import { Container,Table, Row, Col } from "react-bootstrap";
import TicketManager from "../services/ticket";
import DashBox from '../components/layout/dashBox'


const ticketManager = new TicketManager()

export default function TicketPage(props){
  
  const [info, setInfo] = useState([])
  const [tickets, setTicket] = useState([])

  useEffect(()=>{
    setInfo(ticketManager.getInfo())
    setTicket(ticketManager.getTickets())
  },[])

  return (
    <Container>
      <Row>
        {
          info.map((item,index)=>{
            return (
              <Col xs={6} key={index}  md={3}>
                <DashBox {...item} />

              </Col>
            )
          })
        }
      </Row>

      <Table  className="my-5">
        <thead>
          <tr>
            <th>Date</th>
            <th>User</th>
            <th>Amount Spent</th>
          </tr>
        </thead>
        <tbody>
          {
            tickets.map((item,index)=>{
              return (
                <tr key={index}>
                  <td> {item.date} </td>
                  <td> {item.user} </td>
                  <td> {item.amount} </td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </Container>

  )
} 