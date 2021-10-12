
import { useState } from 'react'
import Drawer from '../components/layout/drawer'
import {useAuth} from '../context/auth'
import { Container } from "react-bootstrap";
import ToolBar from '../components/layout/toolbar';
import { Switch } from 'react-router';
import RenderRoute from '../router';


export default function UserLayout({props,routes}){
  const [drawer, setDrawer] = useState(false)

  function toggleDrawer (){
    setDrawer(!drawer)
  }

  const {user} = useAuth()

  return (
    <Container fluid>
      <ToolBar user={user} toggle={toggleDrawer} />
      <Switch>
        {
          routes.map((route,index)=>{
            return (
              <RenderRoute key={index} {...route} />
            )
          })
        }
      </Switch>
      <Drawer display={drawer} routes={routes} toggle={toggleDrawer} />
    </Container>
  )
}