/*
    <div id = "root">

        <div id="main">
            
            <h1 id ="head1"> I am H1 </h1>
            <h2 id ="head2"> I am h2 </h2>

        </div>

    </div>

*/

/*
To append sibling , we must create an array of siblings and pass it as a third parameter
*/ 
// const parent = React.createElement("div",
// {id:"main"},
// [React.createElement("h1",   {id:"head1"},  "I am H1 "),
//  React.createElement("h2",  {id: "head2"},  "I am H2 ")]
// )

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);


// console.log("Mission Successful")


// Task-2


/*
    <div id = "root">


    <div id = parent>

        <div id="main">
            
            <h1 id ="head1"> I am H1 </h1>
            <h2 id ="head2"> I am h2 </h2>

        </div>

        <div id="main2">
            
            <h1 id ="head11"> I am H11 </h1>
            <h2 id ="head21"> I am h21 </h2>

        </div>

    </div>

</div>

*/

const parent = React.createElement("div", {id: "parent"}, 
[
    React.createElement("div", {id: "main1"}, 
    [React.createElement("h1", {id: "head1"}, "I am H1"),
    React.createElement("h2", {id: "head2"}, "I am H2")])    
    ,
    React.createElement("div", {id: "main2"}, 
    [React.createElement("h1", {id: "head11"}, "I am H11"),
    React.createElement("h2", {id: "head21"}, "I am H21")]),
]
)

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent)

// ------------------ Above code looks so messy----------------------------