import React from 'react';

function Conditional(props){
	// console.log(props.isLoading);
	// if(props.isLoading === true){
	// 	return(
	// 		<h1 style={ {'textAlign':'center'} }>Loading...</h1>
	// 	);
	// }

	// this will only run if above condition is not met so no need to write else
	return(
			<h1 style={ {'textAlign':'justify'} }>Some cool stuff about condtional rendering</h1>
	);
	
}
export default Conditional;