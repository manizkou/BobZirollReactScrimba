import React from 'react';
import Joke from './Joke';
import JokesData from './Jokes/jokesData';



class QNA extends React.Component{
	constructor(){
		super();
		this.state={
			jokedata : JokesData
		}
		this.handleJokeChange = this.handleJokeChange.bind(this);
	}

	handleJokeChange(id,ev){
		this.setState((prevState)=>{
			
			// updated jokes data on change 
			const updatedJokesData = prevState.jokedata.map((joke)=>{
				if(joke.id===id){
					joke.skimmed = !joke.skimmed;
				}
				// as its inside a function (which is map here, we must return to return some value)
				return joke;
			});

			// then return the new state
			return {
				jokedata : updatedJokesData
			};
		});
		console.log(`Id: ${id}, ${ev.type}`);
	}

	render(){
		// const nums = [1,2,3,4,5,6];
		// const doubled = nums.map(function(num) {
		// 	return num*2;
		// });
		
		// console.log(doubled);
		const jokeComponents=this.state.jokedata.map((joke)=>{
			return(<Joke key={joke.id} joke={joke} handleJokeChange={this.handleJokeChange} />);
		});

	return(
		<div>
			{/*doubled*/}
			{jokeComponents}
		</div>
		);
	}
}

export default QNA;