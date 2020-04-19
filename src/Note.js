import React from 'react';

class Note extends React.Component{
	
	render(){
		const style={padding:'10px',margin:'10px'};
		return(
			<div style={style}>
				<h3>Understanding ReactJS State</h3>
				<p>
					State is like a data store to the ReactJS component. 
					It is mostly used to update the component when user performed 
					some action like clicking button, typing some text, pressing some key, etc.
				</p>
				<p>
					React.Component is the base class for all class based ReactJS components. 
					Whenever a class inherits the class React.Component 
					it’s constructor will automatically assigns attribute state to the class 
					with intial value is set to null. we can change it by overriding the method constructor.
				</p>
				<p>
					In many cases we need to update the state. To do that we have to use the 
					method setState and directly assigning like <code>this.state = {`{'key': 'value'}`}</code>is strictly prohibited.
					Let’s try to use state concept in our component by changing a little code in 
					above ReactJS component that we have created
				</p>
			</div>
		);
	}
}

export default Note;


