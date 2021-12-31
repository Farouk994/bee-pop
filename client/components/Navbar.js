import { useContext } from "react";
import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";
import { UserContext } from "../context";

const Navbar = () => {
   const [state, setState] = useContext(UserContext);

   const router = useRouter();

   const logout = () => {
      // First remove auth key from local storage
      window.localStorage.removeItem("auth");

      // set state to an empty object as well
      setState(null);

      // Send User to login page
      router.push("/login");
   };
   return (
      <nav
         className="nav  d-flex justify-content-end"
         style={{ backgroundColor: "blue" }}
      >
         <Link href="/">
            <a className="nav-link text-light">Home</a>
         </Link>

         {/* <Link href="/register">
               <a className="nav-link text-light">Register</a>
            </Link> */}

         {state !== null ? (
            <>
               <Link href="/dashboard">
                  <a className="nav-link text-light">
                     {/* try to see if user state is accessible to display on Dashboard*/}
                     {/* {state && state.user && state.user.name} */}
                     Dashboard
                  </a>
               </Link>
               <Link href="/login">
                  <a class="nav-link text-light" onClick={logout}>
                     Logout
                  </a>
               </Link>
            </>
         ) : (
            <>
               <Link href="/login">
                  <a className="nav-link text-light">Login</a>
               </Link>

               <Link href="/sign_in">
                  <a className="nav-link text-light">Sign In</a>
               </Link>
            </>
         )}
      </nav>
   );
};

export default Navbar;
