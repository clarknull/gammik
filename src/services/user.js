class UserManager {

  constructor() {
    this.user = {}
    this.storage = sessionStorage
  }


  getInfo(){
    return  {
      total: 60, newToday:10, active:19
    }
  }

  getUsers(){
    return [
      {date: new Date().toLocaleDateString(), fullName:"Emeka Frank", amount: 20, email:'emaka@mail.com', phone: '0812038018' }
    ]
  }

  login(data) {
    this.user = data
    this.setData('user',data)
  }

  setLocalUser() {
    this.user = this.getData('user')
  }

  getData(key) {
    return JSON.parse(this.storage.getItem(key) || '{}')
  }

  setData(key, data) {
    return this.storage.setItem(key, JSON.stringify(data))
  }

}

export default UserManager