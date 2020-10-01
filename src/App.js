import React from "react";
import "./App.css";
import Navbars from "./Navbar";
import Home from "./Home";
import About from "./About";
import Users from "./Users";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import firebase from "./firebase";
function App() {
  React.useEffect(() => {
    const msg = firebase.messaging();
    msg.requestPermission().then(() => {
      return msg.getToken();
    }).then((data)=>{
      console.warn('token',data)
    })
  });
  return (
    <div className="App">
      <Router>
        <Navbars />
        {/* <Home /> */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
