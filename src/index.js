import React from "react";
import {createRoot} from "react-dom/client";
import "./styles.css";
import App from "./App";

createRoot(document.getElementById("root")).render(<App />);

/* 

Let's learn about props,

If you want to add some value dynamically then you will have to use {variable_name} in JSX, it actually works like JS in JSX.

Example,
function App() {
    const firstName = "Joe"
    const lastName = "Schmoe"
    
    return (
        <h1>Hello {firstName} {lastName}!</h1>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))




*/