import React, { Component } from 'react';
import './App.css';
// import Banner from "./components/Banner";
import Candidates from "./components/Candidates";
import ElectionHome from "./components/ElectionHome";
import Issues from "./components/Issues";
import Login from "./components/Login";
import Mainpage from "./components/Mainpage";
// import Sidebar from "./components/Sidebar";
import Signup1 from "./components/Signup1";
//import pageData from "./pageData";

class App extends Component {
  render() {
    return (
      <div className="App">
       {/*  <Issues pageData={pageData}/> }
        {/* <Banner pageData={pageData}/>
        <Candidates pageData={pageData}/>
        <ElectionHome pageData={pageData}/>
        <Issues pageData={pageData}/>
        <Login pageData={pageData}/>
        <Mainpage pageData={pageData}/>
        <Sidebar pageData={pageData}/>
        <Signup pageData={pageData}/> 
    <Signup1/> */}
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
