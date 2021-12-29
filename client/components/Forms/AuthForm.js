import { SyncOutlined } from "@ant-design/icons";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";

const AuthForm = ({
   handleSubmit,
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
   <form onSubmit={handleSubmit}>
      {/* Used ternary operator to check if the user is on the login page so that 
      request to add names wont be displayed */}
      {page !== "login" && (
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
      )}

      {/* <div className="form-group p-2">
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
      </div> */}

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

            {/* <div className="form-group p-2">
               <input
                  value={secret}
                  onChange={(e) => {
                     setSecret(e.target.value);
                  }}
                  type="text"
                  placeholder="Write your answer here"
               ></input>
            </div> */}
            <TextField
               id="filled-basic"
               label="Write Your Answer here"
               variant="filled"
               value={secret}
               onChange={(e) => {
                  setSecret(e.target.value);
               }}
            />
         </>
      )}

      {/* <div className="form-group p-2">
         <button
            disabled={
               page === "login"
                  ? !email || !password
                  : !name || !email || !secret || !password
            }
            className="btn btn-primary col-12 "
         >
            {loading ? <SyncOutlined spin className="py-1" /> : "Submit"}
         </button>
      </div> */}

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
   </form>
);

export default AuthForm;
