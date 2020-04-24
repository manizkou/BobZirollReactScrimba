import React, {Component} from "react";
import Header from "./Header";
import MemeGen from "./MemeGen";


class MemeGenerator extends Component{
	render(){
		return(
			<div>
				<Header />
				<MemeGen />
			</div>
		);
	}
}

export default MemeGenerator;