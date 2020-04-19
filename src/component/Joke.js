import React from 'react';

// so if you have to pass arguments:
// 1: Either make an anonymous arrow function
// 2: Or bind eventhandler to 'this' 

// 'this' here denotes the class which is the owner ot the function 
//  which means this denotes the QNA class

function Joke(props){

		let jokeQuestion;
		if(props.joke.question){
			jokeQuestion= <h3>Question: {props.joke.question}</h3>;
		}
		
	
	return(
		<div className="questionnaire">
			{jokeQuestion}
			<h3>Answer: {props.joke.punchLine}</h3>
			<input type="checkbox" name="qna" checked={props.joke.skimmed} onChange={props.handleJokeChange.bind(this,props.joke.id)}/>
		</div>
	);
}

// In class components, the this keyword is not defined by default, so with regular functions the 
// this keyword represents the object that called the method, which can be the global window object, 
// a HTML button, or whatever.

// If you must use regular functions instead of arrow functions you have to bind this 
// to the component instance using the bind() method
export default Joke;