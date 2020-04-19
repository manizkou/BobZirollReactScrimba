import React,{Component} from "react";

// function TodoItem(props){

// 	return(
// 		<div className="todo-item"> 
// 			<input type="checkbox" checked={props.item.completed}/>
// 			<p>{props.item.text}</p>
// 		</div>
// 	)
// }

function TodoItem(props){
		const completedStyle = {color:'#cdcdcd', textDecoration:'line-through', fontStyle:'italic'};
	    let item;
	    // if(props.item.completed){
	    //      item = <p style={completedStyle} >{props.item.text}</p>;
	    // }else{
	    //      item = <p>{props.item.text}</p>;
	    // }
		return(
			<div className="todo-item"> 
				<input type="checkbox" checked={props.item.completed} onChange={()=>props.handleChange(props.item.id)} />


				<p style={props.item.completed ? completedStyle: null}>{props.item.text}</p>
			</div>
		)
	
}

export default TodoItem;