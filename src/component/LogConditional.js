import React from "react";

/*
Challenge:

Given a stateless functional component:
1. Follow the steps necessary to add state to it,
2. Have state keep track of whether the user is logged in or not
3. Add a button that logs the user in/out
    a. extra challenge - make the button display "log in" if they're not logged in and "log out" if they are
4. Display text that says "Logged in" if the user is logged in, or "Logged out" if they're not.
*/

class LogConditional extends React.Component {
    constructor(){
        super();
        this.state={
            isloggedIn: false
        }
        this.getLoginStatus = this.getLoginStatus.bind(this);
    }
    
    componentDidMount(){
        
    }
    
    getLoginStatus(){
        this.setState((prevState)=>{
            console.log(prevState);
            console.log(this.state);       

            return {isloggedIn:!prevState.isloggedIn};
            // never change the state directly
            console.log(prevState);
            console.log(this.state);
        });    
    }
    
    
    render(){
        let buttontext=this.state.isloggedIn?"LOG OUT":"LOG IN";
        return (
            <div style={{textAlign:'center'}}>
                <h1>{this.state.isloggedIn?"Logged IN":"Logged Out"}</h1>
                <button onClick={this.getLoginStatus}>{buttontext}</button>            
            </div>
        )
    }
}

export default LogConditional;
