// import React from react;
import './App.css';

import Home from './Home.js'
import Header from './Header.js'
// import Footer from './Footer';
import Login from './Login';
import Welcome from './Welcome';

import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
// import SearchPage from './SearchPage';
// import Navbar from './Navbar';
// import Header from './Header.js';
function App() {
  return (
  
    <div className="App">
      <Router>
        <Header/>

         <Routes>
         {/* / */}
          {/* <Route path="/">
         <Home/>
          </Route>  */}
           <Route path='/' element={<Home/>} />
           <Route path='/login' element={<Login/>} />
           <Route path='/welcome' element={<Welcome/>} />
           
          {/* searchPage */}
         {/* <Route path='/search'>
           <SearchPage/>
         </Route> */}
       </Routes>

         {/* <Footer/> */}

       </Router> 

         {/* Searchpage */}
             {/* header */}
          
             {/* ..... */}
        
    </div>
  ); 
}

export default App;
