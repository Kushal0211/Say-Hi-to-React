import React from "react";
import ReactDOM  from "react-dom/client";

// Let's Create Functional Component

const HeadingComponent = () => {
    return <h1>Namaste Engineer Sahab. </h1>
}

/*
        or we can write like this too

        const HeadingComp = () => <h1> Namaste </h1>

         --------- you know some common arrow function syntax--------


         or you can write it like this also

         const HeadingComp = () => (
            <h1> Namaste </h1>
            ); 
*/

const HeadComp = () => (

    <div id="Func1">
        <h1>Namaste Engineer Sahab. I am Learning Functional Component </h1>
    </div>

);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadComp/>);