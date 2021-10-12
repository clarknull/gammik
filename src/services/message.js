class MessageManager {
  
  getMessages(){
    return [
      {date:new Date().toLocaleDateString(),text: 'Welcome to gamik'},
    ]
  }

}


export default MessageManager