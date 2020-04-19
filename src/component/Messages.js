import React, {Component} from 'react';

class Messages extends Component{
	constructor(){
		super();
		this.state={
			unreadMessages:['a','c']
		}
	}

	render(){
		return(
			<div>
				{
					this.state.unreadMessages.length > 0 && 
					<h1 style={{'textAlign':'center'}}>You have {this.state.unreadMessages.length} messages</h1>
				}
			</div>
		)
	}
}

export default Messages;