
import logo from "../../logo.jpg";

const Header = () => {
    return <div id="header">
      <img src={logo}  alt="logo" id="img1"></img>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>City</li>
        <li>Contact Us</li>
      </ul>
    </div>
  }

  export default Header;