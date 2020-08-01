import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./App";
import Home from "./routes/home";
import Edit from "./routes/edit";
import Profile from "./routes/profile";
import RProfile from "./routes/viewProfile";
import Login from "./routes/login";
import Search from "./routes/search";
import Register from "./routes/register";
import ProfileModal from "./routes/profileModal";
import EditModal from "./routes/editModal";
import PrivacyPolicy from "./routes/privacyPolicy";
import Schedule from "./routes/schedule";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
