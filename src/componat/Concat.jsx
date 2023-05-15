import React, { useState } from "react";
import "./contact.css";

export default function Concat() {
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [comment, setcomment] = useState("");
  const oncontact = () => {
    console.log(name, password, email, comment);
  };
  return (
    // <div className="text-container">
    //   <div className="fro">
    //     <div className="form-nav">
    //       {" "}
    //       <h2 className="con">Contact Us Form</h2>
    //     </div>

    //     <form>
    //       <div className="form-group">
    //         <label>Name:</label>
    //         <br />
    //         <input  type="text" className="form-control" id="name" value={name} onChange={(e) => setname(e.target.value)} placeholder="Enter Name" name="name" />
    //       </div>
    //       <div className="form-group">
    //         <label>Email:</label>
    //         <br />
    //         <br />
    //         <input
    //           type="email"
    //           className="form-control"
    //           id="email"
    //           value={email}
    //           onChange={(e) => setemail(e.target.value)}
    //           placeholder="Enter Email"
    //           name="email"
    //         />
    //       </div>
    //       <div className="form-group">
    //         <label>Mobile:</label>
    //         <br />
    //         <br />
    //         <input
    //           type="text"
    //           className="form-control"
    //           id="mobile"
    //           value={mobiles}
    //           onChange={(e) => setmobiles(e.target.value)}
    //           placeholder="Enter MobileNumber"
    //           name="mobiles"
    //         />
    //       </div>
    //       <div className="form-group">
    //         <label>Comment:</label>
    //         <br />
    //         <br />
    //         <textarea
    //           name="comment"
    //           id="comment"
    //           cols="30"
    //           rows="10"
    //           value={comment}
    //           onChange={(e) => setcomment(e.target.value)}
    //         ></textarea>
    //       </div>
    //     </form>
    //     <button type="submit" className="btn btn-default" onClick={oncontact}>
    //       Register
    //     </button>
    //   </div>
    // </div>

    <div className="login-box">
  <h2>Login</h2>
  <form>
    <div className="user-box">
      <input type="text" id="name" value={name} onChange={(e) => setname(e.target.value)} placeholder="Enter Name" name="name" />
      <label>Username</label>
    </div>
    <div className="user-box">
      <input type="text" id="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              placeholder="Enter password"
              name="password" />
      <label>Password</label>
    </div>
    <div className="user-box">
      <input type="text"id="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              placeholder="Enter Email"
              name="email" />
      <label>Email</label>
    </div>
    <div className="box">
      <textarea   name="comment"
              id="comment"
              cols="30"
              rows="5"
              value={comment}
              onChange={(e) => setcomment(e.target.value)}
            ></textarea>
         <label>/Reviews</label>
    </div>
    <a href="#"onClick={oncontact} >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </a>
  </form>
</div>
  );
}
