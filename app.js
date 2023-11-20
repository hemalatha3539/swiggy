import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./src/components/navbar";
import Body from "./src/components/body";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import AboutUs from "./src/components/Aboutus";
import Contact from "./src/components/contctus";
import Offer from "./src/components/offer";
import Menu from "./src/components/menu";


const APPLayout = () => {
  return (
    <div className="applayout">
      <Navbar/>
      <Outlet/>
      </div>
  );
};
const ways=createBrowserRouter([
  {
  path:"/", 
  element:<APPLayout/>,
  children:[
    {
      path:"/", 
      element:<Body />
    }
    ,
  {
    path:"/search", 
    element:<AboutUs />
  }
  ,
  {
    path:"/contact",
    element:<Contact/>
  }
  ,
  {
    
      path:"/offer",
      element:<Offer/>
    
  },
  {
    
    path:"/restaurants/:id",
    element:<Menu/>

  
}
  ]
}
  
])
const root = ReactDOM.createRoot(document.getElementById("box"));
root.render(<RouterProvider router={ways} />);




