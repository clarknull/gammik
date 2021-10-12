import { useEffect, useState } from "react";
import { Col, Container, Form, Row, Table } from "react-bootstrap";
import DashBox from "../components/layout/dashBox";
import SingleUser from "../components/user/singleUser";
import UserManager from "../services/user";

const userManager = new UserManager()

export default function UsersPage(props){

  const [userInfo, setUserInfo] = useState({})
  const [users, setUsers] = useState([])
  const [model, setModel] = useState({
    user:{}, display:false
  })

  useEffect(()=>{
    setUserInfo(userManager.getInfo())
    setUsers(userManager.getUsers())
  },[])

  function displayUser(item){
    console.log('dsfafdsfads')
    setModel({user:item,display:true})
  }


  return (
    <Container>
      <Row>
        {Object.keys(userInfo).map((item,index)=>{
          return (
            <Col key={index} sm={6} md={4}> 
              <DashBox title={item} text={userInfo[item]} />
            </Col>
          )
        })}
      </Row>

      <Row className="justify-content-end my-5">
        <Col xs={6} sm={4} md={3}>
          <Form>
            <Form.Group>
              <Form.Control type="text" placeholder="Enter User ...." />
            </Form.Group>
          </Form>
        </Col>
      </Row>

      <Table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Full Name</th>
            <th>Ammount Spent</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((item,index)=>{
              return (
                <tr onClick={()=>displayUser(item)} key={index}>
                  <td> {item.date} </td>
                  <td> {item.fullName} </td>
                  <td> {item.amount} </td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>

      <SingleUser display={model.display} close={()=>setModel({user:{},display:false})} user={model.user} />
    </Container>
  )
} 