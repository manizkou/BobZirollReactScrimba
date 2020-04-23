import React from 'react';

function BobFormComponent(props){
	 return (
            <main>
                <form>
                    <input 
                        placeholder="First Name" 
                        name="firstName"
                        value={props.data.firstName} 
                        onChange={props.handleChange} 
                    />
                    <br />
                    <input 
                        placeholder="Last Name" 
                        name="lastName"
                        value={props.data.lastName} 
                        onChange={props.handleChange}
                    />
                    <br />
                    <input 
                        type="number"
                        placeholder="Age" 
                        value={props.data.age} 
                        name="age" 
                        onChange={props.handleChange}
                    />
                    <br />
                    
                    {/* Create radio buttons for gender here */}
                    <label>
                        <input 
                            type="radio" 
                            name="gender" 
                            value="male"
                            checked={props.data.gender==="male"}
                            onChange={props.handleChange}
                        />Male
                    </label>
                    <label>
                        <input 
                            type="radio" 
                            name="gender" 
                            value="female"
                            checked={props.data.gender==="female"}
                            onChange={props.handleChange}                            
                        />Female
                    </label>
                    
                    <br /><br />
                    <select name="destination" onChange={props.handleChange}>
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
                            checked={props.data.dietRestriction.isVegeterian}  
                            onChange={props.handleChange}
                        />Vegeterian
                    </label>
                    <label>
                        <input 
                            type="checkbox" 
                            name="isKosher" 
                            checked={props.data.dietRestriction.isKosher}                            
                            onChange={props.handleChange}
                        />Kosher
                    </label>
                    <label>
                        <input 
                            type="checkbox" 
                            name="isLactoseFree" 
                            checked={props.data.dietRestriction.isLactoseFree}
                            onChange={props.handleChange}
                        />Lactose Free
                    </label>
                    {/* Create check boxes for dietary restrictions here */}
                    <br /><br />
                    
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {props.data.firstName}  {props.data.lastName}</p>
                <p>Your age: {props.data.age}</p>
                <p>Your gender: {props.data.gender}</p>
                <p>Your destination: {props.data.destination}</p>
                <p>
                    Your dietary restrictions: 
                    {props.data.dietRestriction.isKosher?"Kosher ":null}
                    {props.data.dietRestriction.isVegeterian?"Vegeterian ":null}
                    {props.data.dietRestriction.isLactoseFree?"Lactose Free ":null}
                </p>
            </main>
        )
}

export default BobFormComponent;