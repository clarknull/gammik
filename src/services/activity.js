class ActivityManager {

  getActivities(){
    return [
      {game:'God of War', user:'Wayeed Abdu', score: 200, date: new Date().toLocaleDateString()},
      {game:'Call of Duty', user:'Shittu Shittu', score: 436, date: new Date().toLocaleDateString()},
    ]
  }
  getInfo(){
    return [
      {title:'All Time High', text: 800},
      {title:"Today's High", text: 200},
    ]
  }

}


export default ActivityManager