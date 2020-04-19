import React from "react";
import TodoItem from "./TodoItem";
import todoDatas from "./Tododata/todoData";

class MainContent extends React.Component{

	constructor(){
		super();
		this.state={
			todos:todoDatas
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(id){
			this.setState((prevState)=>{
				const updatedTodos = prevState.todos.map((todo)=>{
					
					if(todo.id===id){

						// We should never modify state directly

						// this modifies the previos state directly
						
						// because of the objects are passed by reference than passed by values
						// the todo obeject that we have here is actually the 
						// exact todo object that we have  inside of  prevState.todos
						// this is why it changes the original one instead

						
						// todo.completed = !todo.completed

						// so a better way instead of directly modifying this todo 
						// we are going to return a brand new object
						// that will replace that todo in the new array

						return {
							...todo, //take all of the properties from this todo
							completed: !todo.completed //then manually override the completed property
						} // we are returning the new object and flipped the completed property of new object
						  // instead of modifying the old object directly
						  // i.e without modifying the completed property of the prevState 
						
						//then prevState.todos values maintains its true value or vice versa
						//and the new version maintains its new false value or vice versa

					}

					return todo;
				});
				
				console.log(prevState.todos);
				console.log(updatedTodos);

				return {
					todos : updatedTodos
				} 
			});
			// console.log(this.state.todos);
	}

	render(){
		const date = new Date();
		const hours = date.getHours();
		let timeOfDay;
		const styles ={fontSize: 30};

		if(hours<12){
			timeOfDay="morning";
			styles.color="#04756F";
		}else if(hours>=12 && hours<17){
			timeOfDay="afternoon";
			styles.color="#2E0927";
		}else{
			timeOfDay="evening";
			styles.color="#D90000";
		}

		// const styles ={
		// 	color:"#FF8C00", 
		// 	backgroundColor:"#FF2D00",
		// 	fontSize:"3em"
		// };
		// const todoItems=todoDatas.map((item)=>{
		// 	return(<TodoItem key={item.id} item={item}/>);
		// })
		// instead of above we can use state as below
		const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange} />);

	    return (
	        <main>
	        	<h3>This is the main section </h3>
	        	{
	        		// One curly braces for writing javascript code in JSX
	        	    // And another one for Object Literal which defines the style 
	           	} 
	        	<h1 style={styles}>Good{` ${timeOfDay}`}!</h1>
	        	<br/>
	        	<div className="todo-list">
		        	{todoItems}
	        	</div>

	        </main>
	    )
	}
}

export default MainContent;