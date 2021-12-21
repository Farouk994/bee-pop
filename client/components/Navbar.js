import React from "react";
import Link from "next/link";

const Navbar = () => {
   return (
      <div>
         <nav
            className="nav  d-flex justify-content-end"
            style={{ backgroundColor: "blue" }}
         >
            <Link href="/">
               <a className="nav-link text-light">Home</a>
            </Link>

            <Link href="/register">
               <a className="nav-link text-light">Register</a>
            </Link>

            <Link href="/login">
               <a className="nav-link text-light">Login</a>
            </Link>

            {/* <Link class="nav-link text-light" href="about">
               <a>About</a>
            </Link> */}
         </nav>
      </div>
   );
};

export default Navbar;
