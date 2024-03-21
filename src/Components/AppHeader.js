import Navbar from "./Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHotel} from '@fortawesome/free-solid-svg-icons';
<>{/*faHome ,faCartShopping ,faSignIn,faClock,faPhone,*/}</>
const AppHeader = () => 
{
    return(
    <Navbar 
    logo={<FontAwesomeIcon icon={faHotel}/>}
    lable1="Home"
    lable2="About"
    lable3="Contact Us"
    lable4="Cart"
    lable5="Login"
    lable6="FoodyMe"
    />
    )
}

export default AppHeader;


// const navItems = [
    //     { icon: <FaHome />, label: 'Home' },
    //     { icon: <FaUser />, label: 'Profile' },
    //     { icon: <FaCog />, label: 'Settings' },
    //   ];
    
    //   return (
    //     <div>
    //       <Navbar items={navItems} />
    //       {/* Other content */}
    //     </div>
    //   );
    // };

   // <>
    /* <Navbar 
    logo={<FontAwesomeIcon icon={faHotel}/>} 
    lable1={<FontAwesomeIcon icon={faHome}/>}  
    lable2={<FontAwesomeIcon icon={faPhone}/>}
    lable3={<FontAwesomeIcon icon={faClock}/>}
    lable4={<FontAwesomeIcon icon={faCartShopping}/>}
    lable5={<FontAwesomeIcon icon={faSignIn}/>}
    lable6="Instamart"
    /> */
    //</>