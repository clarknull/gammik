import UserPage from '../pages/users'
import ActivityPage from '../pages/activites'
import GamesPage from '../pages/games'
import LoginPage from '../pages/login'
import TicketPage from '../pages/tickets'
import UserLayout from '../layout/user'

const AppRoutes = [
  {path:'/admin',components:UserLayout, routes:[
    {name: 'Activites' ,path:'/admin/activity',components:ActivityPage},
    {name: 'Tickets' ,path:'/admin/ticket',components:TicketPage},
    {name: 'Games' ,path:'/admin/game',components:GamesPage},
    {name: 'Domr' ,path:'/admin/some',components:UserPage},
    {name: 'Users' ,path:'/admin',components:UserPage},
  ]},
  {path:'/',components:LoginPage},
]

export default AppRoutes