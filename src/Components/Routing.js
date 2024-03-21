import {BrowserRouter,Routes,Route} from "react-router-dom";
//import { createBrowserRouter} from "react-router-dom";
import Home from "./Home";
import Instamart from "./Instamart";
import ContactUs from "./Contact";

export default function Routing() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/"
           element={<Home />}/>
           <Route 
            path="Instamart" 
            element={<Instamart />}/>
            <Route path="Contact" 
            element={<ContactUs/>} />
        </Routes>
      </BrowserRouter>
    );
  }




// const Routerr = createBrowserRouter([
//     {
//       path: "/",
//       element: <Home/>,
//       children: [
//         {
//           path: "Contact",
//           element: <ContactUs/>,
//         },
//         {
//         path: "Instamart",
//         element:<Instamart/>
//         }
//       ],
//     },
//   ]);

 // export default Routerr;



//-----------------------------------------------------------------------------------------------------------------


// import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Home from './components/Home';
// import About from './components/About';
// import Contact from './components/Contact';
// import Navbar from './components/Navbar';

// function Routing() {
//   return (
//     <Router>
//       <Navbar />
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route path="/about" component={About} />
//         <Route path="/contact" component={Contact} />
//       </Switch>
//     </Router>
//   );
// }

// export default Routing;
// In this updated App.js example, we place the Navbar component above the Switch component to ensure that it appears on every page. The Switch component is responsible for rendering the appropriate component based on the current route.

// Now, when you navigate to different routes, the navbar will reflect the active route, and clicking on a link will update the route accordingly.

// Remember to customize the Navbar component and styling according to your design requirements.

// createBrowserRouter([

//     {
//       path: "/",
//       element: <About />,
//       children: [
//         {
        
//           path: "/About/",
//           element: <Home/>,
//         },
//       ],
//     },
//   ]);