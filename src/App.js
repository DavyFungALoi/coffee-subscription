import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HomeScreen from "./Screens/HomeScreen";
import AboutUsScreen from "./Screens/AboutUsScreen";
import SubscribeScreen from "./Screens/SubscribeScreen";

function App() {
  return (
    <Router>
      <div>
        <Header className="Header"></Header>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/about" component={AboutUsScreen} exact />
        <Route path="/subscribe" component={SubscribeScreen} exact />
      </div>
    </Router>
  );
}

export default App;
