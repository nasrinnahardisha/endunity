// import {
//   FaArrowRight,
//   FaLocationDot,
//   FaEnvelopeOpenText,
// } from "react-icons/fa6";
// import "./Navbar.css";
// import logoImage from "../../../assets/image (6).png";
// import { FaPhoneAlt } from "react-icons/fa";
// import Page from "../../Page/Page";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { IoMdClose } from "react-icons/io";

// const Navbar = () => {
//   return (
//     <div>
//       <header className="header">
//         <div className="topbar">
//           <div className="educont">
//             <div className="topbar__left">
//               <ul className="quick-contact list-inline">
//                 <li>
//                   <a href="tel:1234567890">
//                     <FaPhoneAlt />
//                     <span>123 4567-890</span>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="mailto:email@gmail.com">
//                     <FaEnvelopeOpenText />
//                     <span>email@gmail.com</span>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" target="_blank">
//                     <FaLocationDot />
//                     <span>Hudson, Wisconsin(WI), 54016</span>
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             <div className="topbar__right">
//               <Page></Page>
//             </div>
//           </div>
//         </div>

//         <div className="educont">
//           <div className="navbar">
//             <div className="brand-name">
//               <a href="index.html">
//                 <img src={logoImage} className="img-fluid" alt="" />
//               </a>
//             </div>

//             <div className="menu-toggle">
//               <span className="open-icon"><GiHamburgerMenu /></span>
//               <span className="close-icon"><IoMdClose /></span>
//             </div>
//             <div className="menubar">
//               <ul className="nav-menu">
//                 <li className="nav-item">
//                   <a href="index.html" className="active-link link">
//                     Home
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a href="about.html" className="link">
//                     About
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a href="courses.html" className="link">
//                     Courses
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a href="blog.html" className="link">
//                     Blog
//                   </a>
//                 </li>
//               </ul>

//               <div></div>

//               <button className="btn">
//                 Create Account
//                 <span className="circle">
//                   <FaArrowRight className="Arrow" />
//                 </span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </header>
//     </div>
//   );
// };

// export default Navbar;


import {
  FaArrowRight,
  FaLocationDot,
  FaEnvelopeOpenText,
} from "react-icons/fa6";
import "./Navbar.css";
import logoImage from "../../../assets/image (6).png";
import { FaPhoneAlt } from "react-icons/fa";
import Page from "../../Page/Page";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <header className="header">
      <div className="topbar">
           <div className="educont">
            <div className="topbar__left">
               <ul className="quick-contact list-inline">
                <li>
                   <a href="tel:1234567890">
                    <FaPhoneAlt />
                    <span>123 4567-890</span>
                  </a>
                 </li>
                 <li>
                   <a href="mailto:email@gmail.com">
                     <FaEnvelopeOpenText />
                     <span>email@gmail.com</span>
                   </a>
                 </li>
                 <li>
                   <a href="#" target="_blank">
                     <FaLocationDot />
                     <span>Hudson, Wisconsin(WI), 54016</span>
                   </a>
                 </li>
               </ul>
             </div>

             <div className="topbar__right">
              <Page></Page>
             </div>          </div>
         </div>

        <div className="educont">
          <div className="navbar">
            <div className="brand-name">
              <a href="index.html">
                <img src={logoImage} className="logoImage" alt="Logo" />
              </a>
            </div>
            <div
              className={`menu-toggle ${menuOpen ? "active" : ""}`}
              onClick={toggleMenu}
            >
              <span className="open-icon">
                <GiHamburgerMenu />
              </span>
              <span className="close-icon">
                <IoMdClose />
              </span>
            </div>
            <ul className={`nav-menu ${menuOpen ? "nav-open" : ""}`}>
              <li className="nav-item">
                <a href="index.html" className="active-link link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="about.html" className="link">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="courses.html" className="link">
                  Courses
                </a>
              </li>
              <li className="nav-item">
                <a href="blog.html" className="link">
                  Blog
                </a>
              </li>
            </ul>
            <button className="btn">
                 Create Account
                 <span className="circle">
                   <FaArrowRight className="Arrow" />
                 </span>
               </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
