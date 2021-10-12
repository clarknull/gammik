import { Offcanvas,Nav } from "react-bootstrap";
import {Link} from 'react-router-dom'


export default function Drawer (props){
  return (
    <Offcanvas show={props.display} onHide={props.toggle}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>
          Gameik Enterprice
        </Offcanvas.Title>
      </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column" variant="pills">
            {
              props.routes.map((route,index)=>{
                return(
                  <Nav.Item key={index}>
                    <Nav.Link>
                      <Link  to={`${route.path}`}> {route.name} </Link>
                    </Nav.Link>
                  </Nav.Item>
                )
              })
            }
          </Nav>
        </Offcanvas.Body>
    </Offcanvas>
  )
}