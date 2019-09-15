import React from 'react';
import { socket, getWeather } from "./api";
// import logo from './logo.svg';
import './App.css';
import TeacherHome from './components/TeacherHome'
import CreateClassForm from './components/CreateClassForm'
import StudentHome from './components/StudentHome'


function App() {
  // socket.on("CurrentStudents", data => this.setState({ response: data }));

  return (
    <div>HI</div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}
export default App;