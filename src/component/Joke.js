import React from 'react';

function Joke(props){
	return(
		<div className="questionnaire">
			<h3>Question: {props.questionnaire.question}</h3>
			<h3>Answer: {props.questionnaire.answer}</h3>
		</div>
	);
}
export default Joke;