import React, { Component } from 'react';
import './App.css';
import Candidates from "./components/Candidates/Candidates";
import ElectionHome from "./components/ElectionHome/ElectionHome";
import Quiz from "./components/Quiz/Quiz";
import Login from "./components/Login/Login";
import Mainpage from "./components/Mainpage/Mainpage";
import Signup1 from "./components/Signup/Signup1";
import Signup2 from "./components/Signup/Signup2";
import Title from "./components/Title/Title";
import pageData from "./pageData";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Candidates pageData={pageData}/>
        <ElectionHome pageData={pageData}/>
        <Quiz pageData={pageData}/>
        <Login pageData={pageData}/>
        <Mainpage pageData={pageData}/>
        <Signup1 pageData={pageData}/> 
        <Signup2 pageData={pageData}/>
      </div>

/*     <Router>
    <div className="App">
      <Switch>
        <Route exact path="/" component={Books} />
        <Route exact path="/books" component={Books} />
        <Route exact path="/books/:id" component={Detail} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router> */
    )
  }
}

export default App;
