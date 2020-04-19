import React from "react";

class Header extends React.Component{
	constructor(){
		super();
		this.state={
			postiton:'header'
		}
	}
	render(){
	    return (
	        <header className="navbar">This is the {this.state.postiton}</header>
	    )
	}
}

export default Header;