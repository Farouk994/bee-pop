import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Modal } from "antd";
import Link from "next/link";
// import { GooeyCircleLoader } from "react-loaders-kit";
// import { SyncOutlined } from "@ant-design/icons";
import AuthForm from "../components/Forms/AuthForm";

const Register = () => {
   const [name, setName] = useState("Pete");
   const [email, setEmail] = useState("pete2@gmail.com");
   const [password, setPassword] = useState("12123123");
   const [secret, setSecret] = useState("");
   const [okay, setOkay] = useState(false);
   const [loading, setLoading] = useState(false);
   const [question, setQuestion] = useState(false);
   const [pageLoader, setPageLoader] = useState("false");

   const handleSubmit = async (e) => {
      e.preventDefault();
      // console.log(name, email, password, secret);
      try {
         // When loading data

         setLoading(true);
         const { data } = await axios.post(
            `${process.env.NEXT_PUBLIC_API}/register`,
            {
               name,
               email,
               password,
               secret,
            }
         );
         setName("");
         setEmail("");
         setPassword("");
         setSecret("");
         setOkay(data.ok);
         // Once the response is got the loading is then set back to false
         setLoading(false);
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
               <h1 style={{ color: "whitesmoke" }}>Register Here</h1>
            </div>
         </div>

         <div className="row py-5">
            <div className="col-md-6 offset-md-3">
               <AuthForm
                  handleSubmit={handleSubmit}
                  question={question}
                  setQuestion={setQuestion}
                  name={name}
                  setName={setName}
                  email={email}
                  setEmail={setEmail}
                  password={password}
                  setPassword={setPassword}
                  secret={secret}
                  setSecret={setSecret}
                  loading={loading}
                  setLoading={setLoading}
               />
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
         <div className="row">
            <div className="col">
               <p className="text-center">
                  Already Registered? <Link href="/login">Login</Link>
               </p>
            </div>
         </div>
      </div>
   );
};

export default Register;
