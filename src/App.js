import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Signup from "./component/Signup.js";
import Test from "./component/Test.js";

const App = () => { 
  return (  
    <div>
     <Router>
        <Routes>
          <Route exact path="/" element={<Signup />} />
          <Route exact path="/test" element={<Test/>} />
        </Routes>
    </Router>
    </div>
  );
};

export default App;
