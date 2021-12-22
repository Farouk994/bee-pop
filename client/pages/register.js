import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Modal } from "antd";
import Link from "next/link";

const Register = () => {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [secret, setSecret] = useState("");
   const [okay, setOkay] = useState(false);

   const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(name, email, password, secret);
      try {
         const { data } = await axios.post(
            `${process.env.NEXT_PUBLIC_API}/register`,
            {
               name,
               email,
               password,
               secret,
            }
         );
         setName('')
         setEmail('')
         setPassword('')
         setSecret('')
         setOkay(data.ok);
      } catch (err) {
         toast.error(err.response.data);
      }
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
                     <button
                        disabled={!name || !email || !secret || !password}
                        className="btn btn-primary col-12 "
                     >
                        Submit
                     </button>
                  </div>
               </form>
            </div>
         </div>
         <div className="row">
            <div className="col">
               <Modal
                  title="Congratulations"
                  visible={okay}
                  onCancel={() => {
                     setOkay(false);
                  }}
                  footer={null}
               >
                  <p>You have successfully registered</p>
                  <Link href="/login">
                     <a className="btn btn-primary btn-sm">login</a>
                  </Link>
               </Modal>
            </div>
         </div>
      </div>
   );
};

export default Register;
