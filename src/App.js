import React from 'react';
import './style/App.scss';
import Topbar from './components/Topbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from "react-router-dom";
import profile from './pages/profile';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/js/src/index.js';

const Findxyz = (props) => {
  let result = [];
  let number = 3;
  for (let i = 0; i <= props.amount; i++) {
    number = number + (2 * i);
    result.push(number);
  }

  return result.map(n => {
    return n + ","
  })
}

function App() {
  return (
    <div className="App">
      <Router>
        <Topbar />
        <Route exact path="/test" component={profile} />
        <Route path="/test/function-find-value" component={() => {
          return <div className="container" style={{height: 'calc(100vh - 56px - 32px)'}}>
            <div className="pt-3">
            <Findxyz amount={7} />
            </div>
          </div>
        }} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
