import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from "./HomePage";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import { BrowserRouter as Router, Routes, Route, Link, Redirect } from "react-router-dom";


export default class App extends Component {   //class App inherits everything from class Component.
    constructor(props) {                      //class App's constructor has its own argument named props (same as class Component's argument).
        super(props);                        //super(props) is inheriting the props argument from class Component.
    }

    render() {
        return (
                <Router>
                    <Routes>
                        <Route exact path="/" element={<HomePage />} />
                    <Route path="/join" element={<RoomJoinPage />} />
                    <Route path="/create" element={<CreateRoomPage />} />
                    </Routes>
                </Router>
        );
    }
}

const appDiv = document.getElementById("app"); //templates/frontend/index.html is being rendered by django and thus catching that id='app' from dom.
render(<App />, appDiv);
