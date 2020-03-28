import React from "react";
import TodoItem from "./TodoItem";

function MainContent() {

	const date = new Date();
	const hours = date.getHours();

	let timeOfDay;
	const styles ={
		fontSize: 30
	};

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
	        	<TodoItem />
	        	<TodoItem />
	        	<TodoItem />
	        	<TodoItem />
        	</div>

        </main>
    )
}

export default MainContent;