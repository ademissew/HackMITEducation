import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Route, BrowserRouter as Router} from 'react-router-dom'
import TeacherHome from './components/TeacherHome';
import StudentHome from './components/StudentHome';
import CreateClassForm from './components/CreateClassForm';
import ClassView from './components/ClassView';

const routing = (
    <Router>
    <div>
      <Route path="/" component={StudentHome} />
      <Route path="/teacherHome" component={TeacherHome} />
      <Route path="/createClass" component={CreateClassForm} />
      <Route path="/classView" component={ClassView} />
      
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
