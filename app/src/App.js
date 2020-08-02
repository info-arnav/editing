import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Route } from "react-router-dom";
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
import Footer from "./routes/footer";
import Navigator from "./routes/navigator";
import Video from "./routes/video";

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Route path="/app">
          <App />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/index">
          <Home />
        </Route>
        <Route path="/profmod">
          <ProfileModal></ProfileModal>
        </Route>
        <Route path="/search">
          <Search></Search>
        </Route>
        <Route exact path="/login">
          <Login></Login>
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route path="/register/:id">
          <Register />
        </Route>
        <Route exact path="/profile">
          <Profile></Profile>
        </Route>
        <Route path="/profile/:id">
          <RProfile></RProfile>
        </Route>
        <Route path="/edit">
          <Edit></Edit>
        </Route>
        <Route path="/privacy">
          <PrivacyPolicy></PrivacyPolicy>
        </Route>
        <Route path="/schedule">
          <Schedule></Schedule>
        </Route>
        <Route path="/videoCall">
          <Video></Video>
        </Route>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
