import React, {Component} from "react";
import BobFormComponent from "./BobFormComponent";


/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 * 
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 * 
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 * 
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class BobFormContainer extends Component {
    constructor() {
        super()
        this.state = {
            firstName:"",
            lastName:"",
            age:"",
            gender:"",
            destination:"",
            dietRestriction:{
                isVegeterian:false,
                isKosher:false,
                isLactoseFree:false,  
            }                     
        }
        
        this.handleChange=this.handleChange.bind(this);
    }
    
    handleChange(event){
        // deconstruction of the array value when event triggers
        const {name,value,type,checked} = event.target;
        // this.setState({[name]:value});
        type==='checkbox'?this.setState((prevState)=>{
                return{
                    dietRestriction:{
                        ...prevState.dietRestriction,
                        [name]:checked
                    }
                }
        }):
        this.setState({[name]:value});        
    }
    
    render() {
        return(
            <BobFormComponent 
                handleChange={this.handleChange}
                data={this.state}
            />

        )
    }
}

export default BobFormContainer;
