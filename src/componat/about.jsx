// import React from 'react'

// export const About = () => {
//   return (
//     <div>
//       <div className='my-info-container'>

//         <div className='about1'>
//           <div className='first-left-div'>

//             <h1>name:</h1><h3>Ajay bhai</h3>
//             <h1>hieght qulefication:</h1><h3>B.sc</h3>
//             <h1>current Organization:</h1><h3>ONE CLICK IT HUB</h3>
//             <h1>specialization:</h1><h3>REACT,PHP,MYSQL,JAVASCRIPT,JQERY,HTML5,CSS3</h3>
//             <h1>Age:</h1><h3>21</h3>
//             <h1>Year of Exprince:</h1><h3>9 MONTH</h3>
//             <h1>From:</h1><h3>JAIPUR</h3>
//           </div>
//         </div>
//       </div>

//       about</div>
//   )
// }

import React from "react";
import "./about.css";
import MainBackImg from "./img/kk.png";
import { Link } from "react-router-dom";
function about() {
  return (
    <div>
      {/* <TopNav></TopNav> */}
      <div className="my-info-container">
        <div className="about1">
          <div className="first-left-div">
            <h1>About Me</h1>
            <div className="details-row">
              <h1>Name:</h1>
              <h4>AJAY SHARMA</h4>
            </div>
            <div className="details-row">
              <h1>hieghest Qualification:</h1> <h4>B.Sc</h4>
            </div>
            <div className="details-row">
              <h1>Current Organization:</h1>
              <h4>ONECLICK IT </h4>
            </div>
            <div className="details-row">
              <h1>Specialization:</h1>{" "}
              <h4>REACT, PHP, LARAVEL, JavaScript,JQUERY,HTML:5,CSS:3</h4>
            </div>
            <div className="details-row">
              <h1>Age:</h1>
              <h4> 23</h4>
            </div>
            <div className="details-row">
              <h1>Year of Experience:</h1>
              <h4>3 </h4>
            </div>
            <div className="details-row">
              <h1>From</h1>
              <h4>Jaipur</h4>
            </div>
          </div>

          <div className="backimgc">
            <div className="mypic">
              <img src={MainBackImg} className="pic_my"></img>
            </div>

            <div className="action-btn">
              <Link className="resume-view-btn">View Resume</Link>
              <Link className="resume-download-btn">Download Resume</Link>
            </div>
          </div>
        </div>

        {/* <div className="about_p">
            <h1 className='me_h1'>About Me </h1>
            <p className='out_p'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati laudantium ipsam consectetur accusantium totam,
              earum necessitatibus nemo quos dignissimos nostru mnisi
              aut eligendi reprehenderit debitis fugiat et facere delectus
              voluptatibus.
            </p>
          </div> */}
      </div>
      {/* <img src="{MainBackImg}></img> */}
    </div>
  );
}

export default about;
