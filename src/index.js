import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorElement from './Components/ErrorElement';
import About from './Components/About';
import ContactUs from './Components/Contact';
import Login from './Components/Login';
//import Cart from './Utilities/Cart';
import Instamart from './Components/Instamart';
import Body from './Components/Appbody';
import Dynamic from './Components/Dynamic';
import Registration from './Components/Registration';


const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorElement msg1="Error 404" msg2="PAGE NOT FOUND" msg3="The Requested Page Is Not Available" msg4="Kindly Check The Entered URL and provide correct path." />,
      children:
     [
      {
        path: "/",
        element: <Body/>
      },

      {
        path: "/about",
        element: <About/>
      },

      {
        path: "/contact us",
        element: <ContactUs />
      },


      {
        path: "/login",
        element: <Login />
      },

      {
        path:"/register",
        element: <Registration/>
      },

      {
        path: "/dynamic/:id",
        element: <Dynamic />
      },

      {
        path: "/FoodyMe",
        element: <Instamart />
      }
    ]
  }
  ]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
