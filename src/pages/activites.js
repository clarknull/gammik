import { useEffect, useState } from "react";
import { Container,Table, Row, Col } from "react-bootstrap";
import ActivityManager from "../services/activity";
import DashBox from '../components/layout/dashBox'


const activityManager = new ActivityManager()

export default function ActivityPage(props){
  
  const [info, setInfo] = useState([])
  const [activities, setActivity] = useState([])

  useEffect(()=>{
    setInfo(activityManager.getInfo())
    setActivity(activityManager.getActivities())
  },[])

  return (
    <Container>
      <Row>
        {
          info.map((item,index)=>{
            return (
              <Col sm={6}  key={index}>
                <DashBox {...item} />
              </Col>
            )
          })
        }
      </Row>

      <Table className="my-5">
        <thead>
          <tr>
            <th>Date</th>
            <th>User</th>
            <th>Game</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {
            activities.map((item,index)=>{
              return (
                <tr key={index}>
                  <td> {item.date} </td>
                  <td> {item.user} </td>
                  <td> {item.game} </td>
                  <td> {item.score} </td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </Container>

  )
} 