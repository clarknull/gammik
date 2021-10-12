import { Navbar, Button } from "react-bootstrap";

export default function ToolBar(props) {
  return (
    <Navbar>
      <Button onClick={props.toggle}> Drawer </Button>
      <Navbar.Brand href="/admin">
        Gamemik
      </Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          Signed in as {props.user?.username}
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  )
}