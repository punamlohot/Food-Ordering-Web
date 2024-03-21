import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({lable1,lable2,lable3,lable4,lable5,lable6,logo}) => {
    return (
      <header className="App-header">
      <nav className="navbar navbar-expand-sm">
        <div className="container-fluid">
          <a className="navbar-brand" href=" ">{logo}&nbsp;<strong>FOODY-WE</strong></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/" id="navv">{lable1}&nbsp;</Link>
                {/*<Link to="/Home">Home</Link>*/}
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to={"/"+lable2}>{lable2}&nbsp;</Link>
                {/* <Link to="/About"></Link> */}
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to={"/"+lable3}>{lable3}&nbsp;</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/dynamic/:id">{lable4}&nbsp;</Link>
                {/* <Link to="/">Contact Us</Link> */}
              </li>
              <li className="nav-item">
              <Link className="nav-link text-dark" to={"/"+lable5}>{lable5}&nbsp;</Link>
              </li>
              <li className="nav-item">
              <a className="nav-link text-dark" href={"/"+lable6}>{lable6}</a>
              {/* <Link to="/Instamart"></Link> */}
              </li>
  
            </ul>
          </div>
        </div>
      </nav>
      </header>
    )
    };
   
  export default Navbar;


// const Navbar = ({ items }) => {
//   return (
//     <nav>
//       <ul>
//         {items.map((item, index) => (
//           <NavItem key={index} icon={item.icon} label={item.label} />
//         ))}
//       </ul>
//     </nav>
//   );
// };




