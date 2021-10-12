import { useState } from "react"
import { Card, Button } from "react-bootstrap"

export default function ListDisplay(props) {
  const [model,setModel] = useState(false)
  
  return (
    <Card>
      <Card.Title>
        <div style={{textAlign:'right'}}>
          <Button onClick={(e)=> setModel(true)}> Add</Button>
        </div>
      </Card.Title>
      <Card.Body>
        {
          props.items.map((item,index)=>{
            return (
              <props.child key={index} {...item} />
            )
          })
        }
        <props.model display={model} close={()=>setModel(false)} />
      </Card.Body>
    </Card>
  )
}