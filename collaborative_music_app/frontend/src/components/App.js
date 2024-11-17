import React, { Component } from "react";
import { render } from "react-dom";
//import HomePage from "./HomePage";

export default class App extends Component {
    //class App inherits everything from class Component.
    constructor(props) {
        //class App's constructor has its own argument named props (same as class Component's argument).
        super(props); //super(props) is inheriting the props argument from class Component.
    }

    render() {
        return (
            <div>
                {/* <HomePage /> */}
                <h1>React & Django Integrated and Rendered</h1>
            </div>
        );
    }
}

const appDiv = document.getElementById("app"); //templates/frontend/index.html is being rendered by django and thus catching that id='app' from dom.
render(<App />, appDiv);
