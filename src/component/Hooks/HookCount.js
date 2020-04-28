import React,{useState} from "react"

// Convert the class below to a functional component that uses the useState hook to initalize a count vartiable to 0 and display the count on the screen.
// Don't worry about the part where the button changes the count quite yet, that's what you're here to learn about!



function HookCount(){
    const [count, setCount] = useState(0);
    const style={textAlign:'center'};

    function increment(){
        setCount(prevCount=>prevCount+1);
    }

    function decrement() {
        setCount(prevCount => prevCount - 1)
    }

    function double() {
        setCount(prevCount => prevCount*2)
    }

    function half() {
        setCount(prevCount =>Math.round(prevCount/2))
    }

    return(
      <div style={style}>
        <h1>{count}</h1>
        <button onClick={increment}>Increment!</button>
        <button onClick={decrement}>Decrement!</button>
        <button onClick={double}>Double!</button>
        <button onClick={half}>Half!</button>


      </div>  
    );
}
// class HookCount extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             count: 0
//         }
//     }
    
//     render() {
//         return (
//             <div>
//                 <h1>{this.state.count}</h1>
//                 <button>Change!</button>
//             </div>
//         )
//     }
// }

export default HookCount;
