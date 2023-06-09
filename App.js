// const heading = React.createElement("h1",
// {id:"heading", xyz:"abc",className:"test"},
// "hello from react");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

/******************
 * 
 * <div id="paret">
 *  <div id="child">
 *      <h1> I am fromt h1 tag</h1>
 *       <h2> I am fromt h1 tag</h2>
 *  </div>
 *   <div id="child2">
 *      <h1> I am fromt h1 tag</h1>
 *       <h2> I am fromt h1 tag</h2>
 *  </div>
 * </div>
 * 
 * 
 * 
 * 
 */

const parent =  React.createElement("div",
   {id:"parent"},
   [React.createElement("div",
     {id:"child"},
     [
        React.createElement("h1",{},"Hi I am from h1 tag"),
        React.createElement("h2",{},"Hi I am from h2 tag"),
    ]), 
    React.createElement("div",{id:"child2"},
    [React.createElement("h1",{},"I am front h1 tag"),React.createElement("h2",{},"I am front h2 tag")]
    )
]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);