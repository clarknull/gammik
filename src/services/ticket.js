class TicketManager{

  getTickets(){
    return [
      {image:'',title:''},
      {user:'Emeka Frank', amount:80, date: new Date().toLocaleDateString()},
      {user:'Nana Sule', amount:25, date: new Date().toLocaleDateString()},
      {user:'Sam Yanke', amount:82, date: new Date().toLocaleDateString()}
    ]
  }
  
  addTicket(){

  }

  getInfo(){
    return [
      {title:'Total Sales', text: 1252},
      {title:'Monthly Sales', text: 450},
      {title:'Daily Sales', text: 66},
      {title:'Today Sales', text: 12},
    ]
  }
}

export default TicketManager