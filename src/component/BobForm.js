import React, {Component} from "react"

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

class BobForm extends Component {
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
        return (
            <main>
                <form>
                    <input 
                        placeholder="First Name" 
                        name="firstName"
                        value={this.state.firstName} 
                        onChange={this.handleChange} 
                    />
                    <br />
                    <input 
                        placeholder="Last Name" 
                        name="lastName"
                        value={this.state.lastName} 
                        onChange={this.handleChange}
                    />
                    <br />
                    <input 
                        type="number"
                        placeholder="Age" 
                        value={this.state.age} 
                        name="age" 
                        onChange={this.handleChange}
                    />
                    <br />
                    
                    {/* Create radio buttons for gender here */}
                    <label>
                        <input 
                            type="radio" 
                            name="gender" 
                            value="male"
                            checked={this.state.gender==="male"}
                            onChange={this.handleChange}
                        />Male
                    </label>
                    <label>
                        <input 
                            type="radio" 
                            name="gender" 
                            value="female"
                            checked={this.state.gender==="female"}
                            onChange={this.handleChange}                            
                        />Female
                    </label>
                    
                    <br /><br />
                    <select name="destination" onChange={this.handleChange}>
                        <option value="">--- Please Select an Option ---</option>
                        <option value="Sahara Desert">Sahara Desert</option>
                        <option value="Hawaii">Hawaii</option>
                        <option value="Leung">Leung</option>                       
                    </select>
                    
                    {/* Create select box for location here */}
                    <br /><br />
                    <label>
                        <input 
                            type="checkbox" 
                            name="isVegeterian" 
                            checked={this.state.dietRestriction.isVegeterian}  
                            onChange={this.handleChange}
                        />Vegeterian
                    </label>
                    <label>
                        <input 
                            type="checkbox" 
                            name="isKosher" 
                            checked={this.state.dietRestriction.isKosher}                            
                            onChange={this.handleChange}
                        />Kosher
                    </label>
                    <label>
                        <input 
                            type="checkbox" 
                            name="isLactoseFree" 
                            checked={this.state.dietRestriction.isLactoseFree}
                            onChange={this.handleChange}
                        />Lactose Free
                    </label>
                    {/* Create check boxes for dietary restrictions here */}
                    <br /><br />
                    
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName}  {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.destination}</p>
                <p>
                    Your dietary restrictions: 
                    {this.state.dietRestriction.isKosher?"Kosher ":null}
                    {this.state.dietRestriction.isVegeterian?"Vegeterian ":null}
                    {this.state.dietRestriction.isLactoseFree?"Lactose Free ":null}
                </p>
            </main>
        )
    }
}

export default BobForm;
