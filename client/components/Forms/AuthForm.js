import { SyncOutlined } from "@ant-design/icons";

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
         </>
      )}
      <div className="form-group p-2">
         <button
            disabled={!name || !email || !secret || !password}
            className="btn btn-primary col-12 "
         >
            {loading ? <SyncOutlined spin className="py-1" /> : "Submit"}
         </button>
      </div>
   </form>
);

export default AuthForm;
