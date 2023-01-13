import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.min.css"

import firebase from "firebase/app"
import "firebase/auth"

import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import PageNotFound from "./pages/PageNotFound";
import { UserContext } from './context/UserContext';

function App() {

  const [user, setUser] = useState(null);
  
  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{user, setUser}}>
        <Routes>
          <Route path='/' element={<Home />} exact/>
          <Route path='/signin' element={<Signin />} exact/>
          <Route path='/signup' element={<Signup />} exact/>
          <Route path="*" element={<PageNotFound />}/>
        </Routes>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
