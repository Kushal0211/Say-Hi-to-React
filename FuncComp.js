import React, { Component } from "react";
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

// const HeadComp = () => (

//     <div id="Func1">
//         <h1>Namaste Engineer Sahab. I am Learning Functional Component </h1>
//     </div>

// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeadComp/>);  
// This is exactly how we render functionalComponents . simply inside angular brackets

// we can also insert Component inside Component just like this

const elem = <span> I am a span here...</span>;
// -------> Above line is a JSX (React Element)

// const Title =  (

//     <h1 className="heading2">
//         {elem}
//         I am also one Heading 
//     </h1>
// );




const number = 100+200;

const HeadComp = () => (

    <div id="Func1">
        <h2> {number} </h2>
        <img src="pic2.jpg" alt="Image is Loading"/>
        <h1 className="heading1">Namaste Engineer Sahab. I am Learning Functional Component </h1>

        
    </div>

);


// Title is also a JSX 


const Title =  (

    // <h1 className="heading2">
    //     {elem}
    //     I am also one Heading 
    // </h1>

    <div id="div1">
        <HeadComp></HeadComp>
        <HeadComp/>
    </div>
   
);

// ---> Difference i encountered or observed is that if we are using jsx inside functional component or inside any other component , it can be written inside {} curly braces. 

// -----> But But But if we are insering or using Functional Component it can be written only inside Angular brackets like <HeadComp/>

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(Title); 