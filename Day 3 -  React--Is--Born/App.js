const heading = React.createElement("h1", 

{id:"heading1", xyz:"123"}, 

"Hello Engineer. I am calling From React Js "

)

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);