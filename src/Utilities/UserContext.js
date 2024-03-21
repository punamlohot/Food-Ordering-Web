//Context = When we require certain data throughout our application and we want to avoid code complexity doing prop drilling
//context is like central storage for all your data
//way to manage state globally


//Step 1 : Create Context 

import { createContext } from "react"; //default function provided by react which takes objects or functions as argument


const UserContext = createContext(
    {
        "userData": {
            name :"initial name",
            email: "initial email"
        }
    }
);

export default UserContext;

//step 2 : Displaying data in particular/random component

