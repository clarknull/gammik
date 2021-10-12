import { useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { useAuth } from "../context/auth";

export default function LoginPage({props,history}){

  const {login} = useAuth()

  const [form, updateForm ] = useState({
    username:'', password:''
  })


  function handleChange(e){
    updateForm({...form, [e.target.name]:e.target.value})
  }

  function submit(e){
    e.preventDefault()
    //const form = document.forms.login
    login(form)
    history.push('/admin')
  }

  return (
    <Container style={{height:'100vh'}}>
      <Row className="h-100 align-items-center justify-content-center" >
        <Col sm={10} md={8} lg={6}>
          <h2 className="text-center"> Gameik Games Admin  </h2>
          <h4 className="text-center"> Login to Contine  </h4>
          <Form className="mb-5" name="login" onSubmit={submit} >
            <Form.Group>
              <Form.Label> Username </Form.Label>
              <Form.Control value={form.username} name="username" onChange={handleChange} required />
            </Form.Group>
            <Form.Group>
              <Form.Label> Password </Form.Label>
              <Form.Control value={form.password} name="password" onChange={handleChange} type="password" required />
            </Form.Group>
            <Button type="submit"> Submit </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
} 