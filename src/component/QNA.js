import React from 'react';
import Joke from './Joke';


function QNA(){
	return(
		<div>
			<Joke 
				questionnaire={{question:"Have you ever seen the rain?", answer:"Coming doen on a sunny day"}}
			/>
			<Joke 
				questionnaire={{question:"Have you ever seen the rain?", answer:"Coming doen on a sunny day"}}
			/>
			<Joke 
				questionnaire={{question:"Have you ever seen the rain?", answer:"Coming doen on a sunny day"}}
			/>
			<Joke 
				questionnaire={{question:"Have you ever seen the rain?", answer:"Coming doen on a sunny day"}}
			/>
		</div>
	);
}

export default QNA;