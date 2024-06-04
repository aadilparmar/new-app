import "./App.css";
import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
  import{
    BrowserRouter as Router,
    Routes,
    Route,
  }from "react-router-dom"
import About from "./Components/About";
export default class App extends Component {
  pagesize=12;
  render() {
    return (
      <>
      <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<News key="general" headlines="Main Headlines" pageSize={this.pagesize} country="in" category="general"/>}></Route>
        <Route exact path="/about" element={<About/>} ></Route>
        <Route exact path="/business" element={<News key="business"  headlines="Business Headlines" pageSize={this.pagesize} country="in"category="business"/>}></Route>
        <Route  exact path="/entertainment" element={<News key="entertainment"  headlines="Entertainment Headlines" pageSize={this.pagesize} country="in"category="entertainment"/>}></Route>
        <Route  exact path="/general" element={<News key="general"  headlines="Main Headlines" pageSize={this.pagesize} country="in"category="general"/>}></Route>
        <Route exact path="/health" element={<News  key="health"  headlines="Health Headlines" pageSize={this.pagesize} country="in"category="health"/>}></Route>
        <Route  exact path="/science" element={<News key="science"  headlines="Science Headlines" pageSize={this.pagesize} country="in"category="science"/>}></Route>
        <Route  exact path="/sports" element={<News key="sports"  headlines="Sports Headlines" pageSize={this.pagesize} country="in"category="sports"/>}></Route>
        <Route  exact path="/technology" element={<News key="technology"  headlines="Technology Headlines" pageSize={this.pagesize} country="in"category="technology"/>}></Route>
      </Routes> 
      </Router>
      </>
    );
  }
}
