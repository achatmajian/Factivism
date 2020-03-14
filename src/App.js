import React, { Component } from 'react';
import './App.css';
<<<<<<< HEAD
import Candidates from "./components/Candidates/Candidates";
import ElectionHome from "./components/ElectionHome/ElectionHome";
import Quiz from "./components/Quiz/Quiz";
import Login from "./components/Login/Login";
import Mainpage from "./components/Mainpage/Mainpage";
import Signup1 from "./components/Signup/Signup1";
import Signup2 from "./components/Signup/Signup2";
import Title from "./components/Title/Title";
=======
// import Banner from "./components/Banner";
import Candidates from "./components/Candidates";
import ElectionHome from "./components/ElectionHome";
import Issues from "./components/Issues";
import Login from "./components/Login";
import Mainpage from "./components/Mainpage";
// import Sidebar from "./components/Sidebar";
// import Signup1 from "./components/Signup1";
>>>>>>> 723814a28784c692027c2835fc27ed43cd405c59
import pageData from "./pageData";

class App extends Component {
  render() {
    return (
      <div className="App">
<<<<<<< HEAD
        <Title pageData={pageData}/>
=======
       {/*  <Issues pageData={pageData}/> }
        {/* <Banner pageData={pageData}/>
>>>>>>> 723814a28784c692027c2835fc27ed43cd405c59
        <Candidates pageData={pageData}/>
        <ElectionHome pageData={pageData}/>
        <Quiz pageData={pageData}/>
        <Login pageData={pageData}/>
        <Mainpage pageData={pageData}/>
<<<<<<< HEAD
        <Signup1 pageData={pageData}/> 
        <Signup2 pageData={pageData}/>
      
=======
        <Sidebar pageData={pageData}/>
        <Signup pageData={pageData}/> 
    <Signup1/> */}
>>>>>>> 723814a28784c692027c2835fc27ed43cd405c59
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
