import React, { useState, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Link from "next/link";
import AuthForm from "../components/Forms/AuthForm";
import { useRouter } from "next/router";
import { UserContext } from "../context/index";

const Login = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [loading, setLoading] = useState(false);

   const [state, setState] = useContext(UserContext);

   const router = useRouter();

   const handleSubmit = async (e) => {
      e.preventDefault();
      // console.log(name, email, password, secret);
      try {
         // When loading data
         setLoading(true);
         const { data } = await axios.post(
            `${process.env.NEXT_PUBLIC_API}/login`,
            {
               email,
               password,
            }
         );

         setState({
            user: data.user,
            token: data.token,
         });

         // Save now in local storage, takes in key and value
         window.localStorage.setItem("auth", JSON.stringify(data));

         // Redirect User user to home page
         router.push("/");
      } catch (err) {
         toast.error(err.response.data);
         // if there is error it is still false
         setLoading(false);
      }
   };

   return (
      <div className="container-fluid">
         <div className="row py-5 text-light bg-default-image">
            <div className="col text-center">
               <h1 style={{ color: "whitesmoke" }}>Login</h1>
            </div>
         </div>

         <form onSubmit={handleSubmit}>
            <div className="row py-5">
               <div className="col-md-6 offset-md-3">
                  <AuthForm
                     handleSubmit={handleSubmit}
                     email={email}
                     setEmail={setEmail}
                     password={password}
                     setPassword={setPassword}
                     loading={loading}
                     setLoading={setLoading}
                     // Since i was using a reusable component i decided to add a new prop for "page"
                     // so that user wont be required to add their names again when logging in
                     page="login"
                  />
               </div>
            </div>
         </form>
         <div className="row">
            <div className="col">
               <p className="text-center">
                  Not Yet Registered? <Link href="/register">Register</Link>
               </p>
            </div>
         </div>
      </div>
   );
};

export default Login;
