
import { useSelector } from "react-redux";
import logo from "../../logo.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";


const Header = () => {
    
  const [loginKey,setLoginKey] = useState("Login");

  const changeLogin = () => {
      const btn = document.getElementById("btn");
      const info = btn.innerText;
      if(info==="Login"){
        setLoginKey("Logout");
      }
      else if(info==="Logout"){
        setLoginKey("Login");
      }
  }

  const cartItems = useSelector((store)=> store.cart.item)
  
 
    return <div id="header">
      <img src={logo}  alt="logo" id="img1"></img>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/cart">Cart-({cartItems.length}Items)</Link></li>
        {/* <button id="logbtn" onClick={changeLogin} value={loginKey}>{loginKey}</button> */}
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </div>
  }

  export default Header;