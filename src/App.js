import AuthProvider from './context/auth';
import { BrowserRouter, Switch } from 'react-router-dom';
import AppRoutes from './router/routes';
import RenderRoute from './router';

import './App.scss'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          {
            AppRoutes.map((route,index)=>{
              return <RenderRoute key={index} {...route} />
            })
          }
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
