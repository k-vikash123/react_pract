
// making class based components;

import React from "react";
import User from "./User";

class About extends React.Component{
    constructor(props){
        super(props);
        console.log("parent constructor");
        
    }
    componentDidMount(){
        console.log("Parent compenent did mount");
    }
  
      render() {
        console.log("parent render");
        return <div id="about">
            <h1>This is a about page.</h1>
            <p>This is what it is and is build by class based componenet.</p>
            <User/>
        </div>
      }
}

export default About;