import { useContext, createContext,useState } from "react";

const UserContext = createContext();

export function UserProvider({children}){
   const [isLoggedin,setIsLoggedin]  = useState(false);
   const [username,setUsername] = useState('');
   const [darkMode,setDarkMode] = useState(false);

   const values = {
    isLoggedin,setIsLoggedin,
    username,setUsername,
    darkMode,setDarkMode
   }

   return (
    <UserContext.Provider value={values}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}