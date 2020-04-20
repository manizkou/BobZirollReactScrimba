import React from 'react';

class Form extends React.Component{
	constructor(){
		super();
		this.state={
			firstName:"",
			lastName:""
		}

		this.handleChange =this.handleChange.bind(this);
	}

	handleChange(event){
		this.setState({
			[event.target.name] : event.target.value
		})
		// event.target.name is a string so it must be put in square 
		// brackets so that it could be placed in an object
	}

	render(){
		const formStyle ={textAlign:"center"};

		return(
			<form style={formStyle}>
				<input 
					type="text" 
					value={this.state.firstName} 
					name="firstName" 
					placeholder="FirstName" 
					onChange={this.handleChange} 
				/>
				<input 
					type="text" 
					value={this.state.lastName} 
					name="lastName" 
					placeholder="LastName" 
					onChange={this.handleChange} 
				/>

				<h1>{this.state.firstName!=""? `Is your name ${this.state.firstName} ${this.state.lastName}?`:null}</h1>
			</form>
		);
	}
}

export default Form;