import React, { useContext } from "react";
import { UserContext } from "../context";

const dashboard = () => {
   const [state, setState] = useContext(UserContext);
   const getName = () => {
      window.localStorage.removeItem("auth");
      setState(null);
   };

   return (
      <div>
         <h1>Welcome {state && state.user && state.user.name}</h1>
      </div>
   );
};

export default dashboard;
