import React, { useState } from "react";
import axios from "axios";

const Register = () => {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [secret, setSecret] = useState("");

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log(name, email, password, secret);
      axios
         .post("http://localhost:8080/api/register", {
            name,
            email,
            password,
            secret,
         })
         .then((res) => {
            console.log(res);
         })
         .catch((err) => {
            console.log(err);
         });
   };

   return (
      <div>
         <div className="row py-5 bg-secondary text-light">
            <div className="col text-center">
               <h1>Register Here</h1>
            </div>
         </div>

         <div className="row py-5">
            <div className="col-md-6 offset-md-3">
               <form onSubmit={handleSubmit}>
                  <div className="form-group p-2">
                     <small>
                        <label className="text-muted">Your Name</label>
                     </small>
                     <input
                        value={name}
                        onChange={(e) => {
                           setName(e.target.value);
                        }}
                        type="text"
                        className="form-control"
                        placeholder="Enter Name"
                     ></input>
                  </div>

                  <div className="form-group p-2">
                     <small>
                        <label className="text-muted">Email Address</label>
                     </small>
                     <input
                        value={email}
                        onChange={(e) => {
                           setEmail(e.target.value);
                        }}
                        type="email"
                        className="form-control"
                        placeholder="Email"
                     ></input>
                  </div>

                  <div className="form-group p-2">
                     <small>
                        <label className="text-muted">Password</label>
                     </small>
                     <input
                        value={password}
                        onChange={(e) => {
                           setPassword(e.target.value);
                        }}
                        type="password"
                        className="form-control"
                        placeholder="Password"
                     ></input>
                  </div>

                  <div className="form-group p-2">
                     <small>
                        <label className="text-muted">Password</label>
                     </small>
                     <select className="form-control">
                        <option>What is your favorite color?</option>
                        <option>Which city where you born?</option>
                        <option>What is the name of your first pet?</option>
                     </select>
                     <small className="form-test text-muted">
                        You can use this to reset your password if forgotten.
                     </small>
                  </div>

                  <div className="form-group p-2">
                     <input
                        value={secret}
                        onChange={(e) => {
                           setSecret(e.target.value);
                        }}
                        type="text"
                        placeholder="Write your answer here"
                     ></input>
                  </div>
                  <div className="form-group p-2">
                     <button className="btn btn-primary col-12 ">Submit</button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
};

export default Register;
