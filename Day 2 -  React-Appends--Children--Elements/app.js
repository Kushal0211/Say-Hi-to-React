
/*
        <div id="main">
                <div id="main2">
                    <h1 id="heading1">I am the h1 tag</h1>
            </div>
        </div>
*/




const parent = React.createElement("div", {id:"main2"}, 
React.createElement("h1",{id:"heading1"},"I am the h1 tag"));


const main = ReactDOM.createRoot(document.getElementById("main"));

console.log(parent);

main.render(parent);