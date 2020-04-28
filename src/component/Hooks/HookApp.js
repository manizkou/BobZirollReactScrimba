import React, { useState } from "react";

function HookApp() {
	// using array destructuring as in object destructuring
	// so that we don't have to use answer[0] 

    const [answer] = useState("yes");
    console.log(answer);
    
    return (
        <div>
            <h1>Is state important to know? {answer}</h1>
        </div>
    );
}

export default HookApp;