
import React, { Suspense, lazy } from "react";
import ReactDom from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import RestMenu from "./src/components/RestMenu";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore";
import Cart from "./src/components/Cart";

const AppLayout = () => {
  return (
  <Provider store={appStore}>
  <div id="layout">
   <Header/>
   <Outlet/>
  </div> 
  </Provider>
  )
}

const AppRoute = createBrowserRouter([
  {
    path : "/",
    element : <AppLayout/>,
    children : [
      {
        path : "/",
        element : <Body/>
      },
      {
        path : "/about",
        element : <About/>
      },
      {
        path : "/contact",
        element : <Contact/>
      },
      {
        path : "/cart",
        element : <Cart/>
      },
      {
        path : "/restaurant/:resId",
        element : <RestMenu/>
      }
    ],
    errorElement : <Error/>
  }
 
])


const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRoute}/>);