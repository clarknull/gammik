import { createContext, useContext, useState, useEffect } from "react"
import UserManager from '../services/user'

const AuthContext = createContext()
const userManager = new UserManager()

export function useAuth() {
  return useContext(AuthContext)
}

export default function AuthProvider({children}) {

  const [ user, setUser ] = useState()


  useEffect(() => {
    userManager.setLocalUser()
    setUser(userManager.user)
  }, [])

  function login(data){
    userManager.login(data)
  }

  return (
    <AuthContext.Provider value={{user,login}}>
      { children }
    </AuthContext.Provider>
  )
}