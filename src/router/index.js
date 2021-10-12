import React from "react"
import { Route } from 'react-router-dom'

function RenderRoute(props) {
  const route = props
  return <Route path={route.path} exact={route.exact} render={(props) => {
    return <route.components {...props} routes={route.routes} />
  }} />

}

export default RenderRoute