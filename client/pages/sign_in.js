import React from "react";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
// import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
// import FormControl from "@mui/material/FormControl";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import Select from "@mui/material/Select";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { toast } from "react-toastify";
import { SyncOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import AuthForm from "../components/Forms/AuthForm";

function Copyright(props) {
   return (
      <Typography
         variant="body2"
         color="text.secondary"
         align="center"
         {...props}
      >
         {"Copyright © "}
         <Link color="inherit" href="#">
            Your Website
         </Link>{" "}
         {new Date().getFullYear()}
         {"."}
      </Typography>
   );
}

const theme = createTheme();

export default function SignInSide() {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [secret, setSecret] = useState("");
   const [okay, setOkay] = useState(false);
   const [loading, setLoading] = useState(false);
   const [question, setQuestion] = useState("");

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         setLoading(true);
         //  Post data from form using axios;
         const { data } = await axios.post(
            `${process.env.NEXT_PUBLIC_API}/register`,
            {
               name,
               email,
               password,
               secret,
            }
         );
         //  What ever data we get is then set inside the state with setState function
         setName("");
         setEmail("");
         setPassword("");
         setSecret("");
         setOkay(data.ok);
         //  Loading is setback to false when response is got
         setLoading(false);
      } catch (err) {
         toast.error(err.response.data);
         setLoading(false);
      }
   };

   const handleChange = (e) => {
      setQuestion(e.target.value);
   };

   return (
      <ThemeProvider theme={theme}>
         <Grid container component="main" sx={{ height: "100vh" }}>
            <CssBaseline />
            <Grid
               item
               xs={false}
               sm={4}
               md={7}
               sx={{
                  backgroundImage: "url(https://source.unsplash.com/random)",
                  backgroundRepeat: "no-repeat",
                  backgroundColor: (t) =>
                     t.palette.mode === "light"
                        ? t.palette.grey[50]
                        : t.palette.grey[900],
                  backgroundSize: "cover",
                  backgroundPosition: "center",
               }}
            />
            <Grid
               item
               xs={12}
               sm={8}
               md={5}
               component={Paper}
               elevation={6}
               square
            >
               <Box
                  sx={{
                     my: 8,
                     mx: 4,
                     display: "flex",
                     flexDirection: "column",
                     alignItems: "center",
                  }}
               >
                  <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                     <LockOutlinedIcon />
                  </Avatar>
                  <Typography component="h1" variant="h5">
                     Sign in
                  </Typography>
                  <Box
                     component="form"
                     noValidate
                     onSubmit={handleSubmit}
                     sx={{ mt: 1 }}
                  >
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
                  </Box>
               </Box>
            </Grid>
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
         </Grid>
      </ThemeProvider>
   );
}
