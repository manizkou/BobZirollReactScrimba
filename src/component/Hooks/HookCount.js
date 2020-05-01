import React,{useState, useEffect} from "react";
import randomcolor from "randomcolor";

// Convert the class below to a functional component that uses the useState hook to initalize a count vartiable to 0 and display the count on the screen.
// Don't worry about the part where the button changes the count quite yet, that's what you're here to learn about!


// for useEffect
// componentDidMount
// componentDidUpdate
// componentWillUnmount

// Side effects?
// Network request
// Manual DOM manipulation
// Event listeners or timeouts and intervals

function HookCount(){
        const [count, setCount] = useState(0);
        // use random color only once on load
        // const [color, setColor] = useState(randomcolor());
        const [color, setColor] = useState("");
        const style={textAlign:'center'};
    

    // use random color only once on load
    // useEffect(()=>{
    //     setColor(randomcolor());
    // },[])

    useEffect(()=>{
        setColor(randomcolor());
        setInterval(()=>{
            console.log('Interval');
        },1000)
    },[count])

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
        <h1 style={{color:color}}>{count}</h1>
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
