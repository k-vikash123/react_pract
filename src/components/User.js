import React from "react";

class User extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userInfo : {
            login : "asdf",
            public_repos : 1,
            id : 12345
        },
    }
}

   async componentDidMount(){
        console.log("Child compenent did mount");
        let user = await fetch("https://api.github.com/users/k-vikash123");
        let data = user.json();
        
        this.setState({
            userInfo : data,          
        })
    }

    componentDidUpdate(){
        console.log("Componenet got update");
        
    }

    componentWillUnmount(){
        console.log("This will triger when the comp is removed from the UI.")
    }
    render(){
        const {id,login,public_repos} = this.state.userInfo;
        
        return <div id="user">
            <h1>this is a user and its detail's are : </h1>
            <h3>{id}</h3>
            <h3>{login}</h3>
            <h3>{public_repos}</h3>
        </div>
    }
}

export default User;