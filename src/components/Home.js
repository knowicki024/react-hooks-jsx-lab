// import React from "react";
// import { name, city , color } from "../data/data.js";


// function Home() {
//   // update the JSX being returned!
//   return (<div id = "home">Home
//   <h1 style = {{color: color}}>{name} is a Web Devloper from {city}</h1>
//   </div>
//   )
// }

// export default Home;

import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  return (
    <div id="home">
      Home
      <h1 style={{ color: "firebrick" }}>{name} is a Web Developer from {city}</h1>
    </div>
  );
}

export default Home;
