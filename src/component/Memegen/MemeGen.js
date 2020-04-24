import React, {Component} from "react";

class MemeGen extends Component{
	constructor(){
		super();
		this.state={
			topText:"",
			bottomText:"",
			randomImg:"http://i.imgflip.com/1bij.jpg",
			allMemeImgs:[]
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

	}

	
	componentDidMount(){

		fetch("https://api.imgflip.com/get_memes")
		.then(response=>{ return response.json() })
		.then(response=>{
				console.log("response:");
				console.log(response);
				console.log("Response.data:")
				console.log(response.data);
				console.log("Response.data.memes:");
				console.log(response.data.memes);

				const {memes} = response.data;
				console.log("const {memes}= Response.data.memes:");
				console.log(memes);


				this.setState({
					allMemeImgs:memes
				});
		}
		)
		console.log(this.state.allMemeImgs);
	}


	handleChange(event){
		const{name, value}=event.target;
		this.setState({
			[name]:value
		})
		const random = Math.floor(Math.random()*100);
		console.log(random);
		console.log(this.state.allMemeImgs[random].url);
		name==="topText"? console.log(this.state.topText):console.log(this.state.bottomText);
	}

	handleSubmit(event){
		// console.log(this.state.allMemeImgs[Math.random()*100]);
		event.preventDefault();
		const random = Math.floor(Math.random()*this.state.allMemeImgs.length);
		console.log(random);
		console.log(this.state.allMemeImgs[random]);

		const memeUrl = this.state.allMemeImgs[random].url;
		console.log(memeUrl);
		this.setState({
			randomImg :memeUrl
		})
	}




	render(){
		return(
			<div>
				<form className="meme-form" onSubmit={this.handleSubmit}>
                    <input 
                    	type="text" 
                    	name="topText"
                    	value={this.state.topText}
                    	onChange={this.handleChange}
                    	placeholder="Top Text"
                    />

                     <input 
                    	type="text" 
                    	name="bottomText"
                    	value={this.state.bottomText}
                    	onChange={this.handleChange}
                    	placeholder="Bottom Text"
                    />
                   
                    <button>Gen</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImg} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
			</div>
		);
	}
}

export default MemeGen;