import React from 'react';

class Form extends React.Component{
	constructor(){
		super();
		this.state={
			firstName:"",
			lastName:"",
			isFriendly:false,
			brief:"",
			gender:"",
			favColor:"blue"
		}

		this.handleChange =this.handleChange.bind(this);
		this.handleSubmit =this.handleSubmit.bind(this);

	}

	handleChange(event){
		const {name, value, type, checked} = event.target
		type==="checkbox"?this.setState({[name]:checked}):this.setState({[name] : value})
		

		
		// event.target.name is a string so it must be put in square 
		// brackets so that it could be placed in an object
	}

	handleSubmit(){

	}

	render(){
		const formStyle ={textAlign:"center"};

		return(
			<form style={formStyle} onSubmit={this.handleSubmit}>
				<input 
					type="text" 
					value={this.state.firstName} 
					name="firstName" 
					placeholder="FirstName" 
					onChange={this.handleChange} 
				/>
				<br/>
				<br/>
				<input 
					type="text" 
					value={this.state.lastName} 
					name="lastName" 
					placeholder="LastName" 
					onChange={this.handleChange} 
				/>
				<br/>
				<br/>
				<textarea 
					value={this.state.brief} 
					name="brief"
					onChange={this.handleChange}
					/>
				<br/>
				<label>
					<input 
						type="checkbox" 
						checked={this.state.isFriendly}
						name="isFriendly"
						onChange={this.handleChange}
					/>
					Is Friendly??
				</label>
				<br/>
				<br/>
				<label>
					<input 
						type="radio" 
						checked={this.state.gender==="male"}
						name="gender"
						value="male"
						onChange={this.handleChange}
					/>
					Male
				</label>
				<label>
					<input 
						type="radio" 
						checked={this.state.gender==="female"}
						name="gender"
						value="female"
						onChange={this.handleChange}
					/>
					Female
				</label>

				{/*formik*/}
				<br/>
				<label>Favorite Color:</label>
                <select 
                    value={this.state.favColor}
                    onChange={this.handleChange}
                    name="favColor"
                >
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>
                </select>
                
                <h1>{this.state.firstName} {this.state.lastName}</h1>
                <h2>You are a {this.state.gender}</h2>
                <h2>Your favorite color is {this.state.favColor}</h2>

				<h1>{this.state.firstName!==""? `Is your name ${this.state.firstName} ${this.state.lastName}?`:null}</h1>
				<button>Submit</button>
			</form>
		);
	}
}

export default Form;