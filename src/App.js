//import MyClass from "./newClass";
//import About from "./Components/About";
//import ContactUs from "./Contact";
import './App.css';
import AppHeader from './Components/AppHeader';
//import Body from './Components/Appbody';
import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer';
//import Login from './Components/Login';
//import Instamart from './Components/Instamart'
//import Routing from './Components/Routing';
//import Test from './Components/Test';
//import UserContext from './Utilities/UserContext';
//import { Provider } from "react-redux";
//import Mystore from "../Redux/Store";

function App() {
  return (
    <>
    {/* <Provider Store = {Mystore}> */}
    <div className="App">
    <AppHeader/>
    <Outlet/>
    <Footer/>
    {/*<Instamart/>
    <Login/>
     <Body/>
    */}
    </div>
    {/* </Provider> */}
    </>
  )
  
};

export default App;