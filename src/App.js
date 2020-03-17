import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Candidates from "./components/Candidates/Candidates";
import ElectionHome from "./components/ElectionHome/ElectionHome";
import Quiz from "./components/Quiz/Quiz";
import Login from "./components/Login/Login";
import Mainpage from "./components/Mainpage/Mainpage";
import Signup1 from "./components/Signup/Signup1";
import Signup2 from "./components/Signup/Signup2";
import pageData from "./pageData";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" render={() => <Mainpage pageData={pageData}/>}/>
            <Route exact path="/candidates" render={() => <Candidates pageData={pageData}/>}/>
            <Route exact path="/electionhome" render={() => <ElectionHome pageData={pageData}/>}/>
            <Route exact path="/quiz" render={() => <Quiz pageData={pageData}/>}/>
            <Route exact path="/login" render={() => <Login pageData={pageData}/>}/>
            <Route exact path="/signup1" render={() => <Signup1 pageData={pageData}/>}/>
            <Route exact path="/signup2" render={() => <Signup2 pageData={pageData}/>}/>
          </Switch>
          </div>
      </Router>
      
    )}};

export default App;
