//Step 1 : Install Required Packages (RTK & React Redux)
//Step 2 : Create Store 
//Step 3 : Use Provider and provide ur store to our app / any component

import {configureStore} from "@reduxjs/toolkit";

//configureStore is a API provided by RTK 

const Mystore = configureStore()


export default Mystore;
