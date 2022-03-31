import React from "react";
import ReactDOM from "react-dom";

import HomePage from "./views/homePage";



export const App = () =>{

return (
<HomePage />
);

}
ReactDOM.render(<App />, document.getElementById("app"));
