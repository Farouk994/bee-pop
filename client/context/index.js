import { useState, createContext, useEffect } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
   const [state, setState] = useState({
      user: {},
      token: "",
   });

   useEffect(() => {
      // Grab the item from the local storage and set it in the state
      setState(JSON.parse(window.localStorage.getItem("auth")));
   }, []);

   return (
      <UserContext.Provider value={[state, setState]}>
         {children}
      </UserContext.Provider>
   );
};

export { UserContext, UserProvider };
