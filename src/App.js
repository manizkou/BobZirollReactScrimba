import React from "react";
import Header from "./component/Header";
import MainContent from "./component/MainContent";
import Footer from "./component/Footer";
import ContactGroup from "./component/ContactGroup";
import QNA from "./component/QNA";
import Note from "./Note";
import Counter from "./Counter";
import Conditional from "./Conditional";
import Messages from "./component/Messages";
import LogConditional from "./component/LogConditional";
import Form from "./component/Form";
import BobForm from "./component/BobForm";



// for fetch api
// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch

// starwars api
// https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261


// import "./style.css";
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findindex


// React lifecycle changes in React 26 than its previous predecessors
// https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1
// https://reactjs.org/blog/2018/03/29/react-v-16-3.html#component-lifecycle-changes

class App extends React.Component{

	constructor(){
		super();
		this.state={
			isLoading:true,
			pokemons:{},
			isApiLoading:false
		}
	}

	// probably mostly you wont need it read the last blog
	// static getDerivedStateFromProps(props, state) {
        // return the new, updated state based upon the props
        // https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops
        // https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
    // }

    // getSnapshotBeforeUpdate() {
        // create a backup of the current way things are
        // https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate
    // }

	// its deprecated in version 16
	// componentWillMount(){

	// }

	componentDidMount(){
		this.setState({isApiLoading:true});
		fetch("https://pokeapi.co/api/v2/pokemon/1/")
		.then(response=>response.json())
		.then(data=>{
			console.log(data);
			this.setState({
				pokemons:data,
				isApiLoading:false	
			})
		});

		// It's like when you are just born and do something like cry
		// Get the data i need to correctly display
		// console.log(this.state.isLoading)
		setTimeout(()=>{
			this.setState({
				isLoading: false
			})
			// console.log(this.state.isLoading)
		}, 3000)
		// console.log(this.state.isLoading)
	}

	// one of the lifecycle method that is gonna be depracated or is deprecated startind in 16.3
	// Till react 17 comes out they have rename it
	
	// UNSAFE_componentWillRecieveProps(nextProps)
	// if you need to do it you can do it as above 
	// but once react 17 comes out its gonna be completely gone

	// this is also going away(deprecated)
	// componentWillRecieveProps(nextProps){
	// 	// kinda like when someone gives you gifts
	// 	// this component could be recieveing props from the parent component
	// 	// and everytime this component will be recieving props it will run componentWillRecieveProps() method
	// 	// it will not only run when the component is f=very first mounted 
	// 	// But will run every single time the Parent Component decides to hand props to a child component

	// 	if (nextProps.whatever !== this.props.whatever) {
 //            // do something important here
 //        }
	// }

	// shouldComponentUpdate(nextProps, nextState){
		// return true if want it to update
        // return false if not
	// }

	// this too is deprecated
	// componentWillUpdate(){

	// }

	// componentWillUnmount(){
		// teardown or cleanup your code before your component disappears
		// (E.g. remove event listener)
	// }

	render(){
		const pokemonApiResult= this.state.isApiLoading ? "Loading.." : this.state.pokemons.name ;
	    return (
	        <div>
	            <Header />
	            <Note />
	            <MainContent />
	            <Counter/>
	            {
	            	this.state.isLoading ? 
	            	<h1>Loading...</h1>:
	            	<Conditional/>
	            }
	            <LogConditional />
	            <div>{pokemonApiResult}</div>
	            <Form />
	            <Messages />
	            <BobForm />
	            <ContactGroup />
	            <QNA />
	            <Footer />
	        </div>
	    )
    }
}

export default App;