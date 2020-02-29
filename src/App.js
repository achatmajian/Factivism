import React, { Component } from 'react';
import './App.css';
// import Banner from "./components/Banner";
// import Candidates from "./components/Candidates";
// import ElectionHome from "./components/ElectionHome";
import Issues from "./components/Issues";
// import Login from "./components/Login";
// import Mainpage from "./components/Mainpage";
// import Sidebar from "./components/Sidebar";
// import Signup from "./components/Signup";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Issues/>
        {/* <Banner pageData={pageData}/>
        <Candidates pageData={pageData}/>
        <ElectionHome pageData={pageData}/>
        <Issues pageData={pageData}/>
        <Login pageData={pageData}/>
        <Mainpage pageData={pageData}/>
        <Sidebar pageData={pageData}/>
        <Signup pageData={pageData}/> */}
      </div>
    )
  }
}



export default App;
