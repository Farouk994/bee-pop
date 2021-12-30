import { SyncOutlined } from "@ant-design/icons";
import { GooeyCircleLoader } from "react-loaders-kit";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import Box from "@mui/material/Box";

const AuthForm = ({
   handleSubmit,
   question,
   setQuestion,
   name,
   setName,
   email,
   setEmail,
   password,
   setPassword,
   secret,
   setSecret,
   loading,
   // Destruct page as prop to handle log-in
   page,
}) => (
   <Box onSubmit={handleSubmit}>
      {/* Used ternary operator to check if the user is on the login page so that 
      request to add names wont be displayed */}
      {page !== "login" && (
         <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            value={name}
            label="Username"
            name="name"
            autoComplete="name"
            autoFocus
            onChange={(e) => {
               setName(e.target.value);
            }}
         />
      )}
      <TextField
         margin="normal"
         required
         fullWidth
         id="email"
         value={email}
         label="Email Address"
         name="email"
         autoComplete="email"
         onChange={(e) => {
            setEmail(e.target.value);
         }}
      />
      <TextField
         margin="normal"
         required
         fullWidth
         name="password"
         label="Password"
         type="password"
         id="password"
         value={password}
         autoComplete="current-password"
         onChange={(e) => {
            setPassword(e.target.value);
         }}
      />

      {page !== "login" && (
         <>
            <FormControl fullWidth>
               {/* <div className="form-group p-2"> */}
               <small>
                  <label className="text-muted">Password Question *</label>
               </small>
               <select
                  className="form-control"
                  onChange={(e) => setQuestion(e.target.value)}
               >
                  <option value="">Select Question *</option>
                  <option>What is your favorite color?</option>
                  <option>Which city where you born?</option>
                  <option>What is the name of your first pet?</option>
               </select>
               <small
                  className="form-test text-muted"
                  style={{ color: "green" }}
               >
                  You can use this to reset your password if forgotten.
               </small>
               {/* </div> */}
            </FormControl>

            <TextField
               margin="normal"
               required
               fullWidth
               name="secret"
               label="Secret"
               type="text"
               id="secret"
               value={secret}
               variant="filled"
               placeholder="Write your answer here"
               autoComplete="current-password"
               onChange={(e) => {
                  setSecret(e.target.value);
               }}
               disabled={!question}
            />
         </>
      )}

      <FormControlLabel
         control={<Checkbox value="remember" color="primary" />}
         label="Remember me"
      />
      <Button
         type="submit"
         fullWidth
         variant="contained"
         sx={{ mt: 3, mb: 2 }}
         disabled={
            page === "login"
               ? !email || !password
               : !name || !email || !password || !secret
         }
         // className="btn btn-primary col-12 "
      >
         {loading ? <SyncOutlined spin className="py-1" /> : "Sign Up"}
      </Button>
      <Grid container>
         <Grid item xs>
            <Link href="#" variant="body2" style={{ textDecoration: "none" }}>
               Forgot password?
            </Link>
         </Grid>
         {page !== "login" && (
            <Grid item>
               <Link
                  href="/login"
                  variant="body2"
                  style={{ textDecoration: "none" }}
               >
                  {"Already have an account? Login"}
               </Link>
            </Grid>
         )}
      </Grid>
   </Box>
);

export default AuthForm;
