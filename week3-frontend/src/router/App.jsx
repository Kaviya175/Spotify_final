// import Login from '../component/Login'
// import Signup from '../component/Signup'
// import './App.css'
// import Navbar from '../component/Navbar'
// import { Outlet } from 'react-router-dom'
// import Profile from './component/Profile'
// //import Home from './component/Home';
// //import {Routes,Route,navigate} from 'react-router-dom';
// //import { AuthContext,AuthProvider } from './Context';
// //import { useContext } from 'react';
// function App() {
//   // const {token}=useContext(AuthContext);

//   return (
//     <div className='app'>
//     {/* <div>header</div> */}
//     {/* <Navbar> </Navbar> */}
//     <main> <Outlet></Outlet></main>


//     </div>

  
// )};
// export default App;


// // import React, { useContext } from 'react';
// // import { Routes, Route, Navigate } from 'react-router-dom';
// // import { AuthContext, AuthProvider } from './Context';
// // import Signup from './component/Signup';
// // import Login from './component/Login';
// // import Home from './component/Home';
// // function App() {
// //   const { token } = useContext(AuthContext);
// //   return (
// //     <Routes>
// //       <Route path="/signup" element={<Signup />} />
// //       <Route path="/login" element={<Login />} />
// //       <Route path="/" element={token ? <Home /> : <Navigate to="/signup" />}/>
// //     </Routes>
// //   );
// // }
// // export default () => (
// //   <AuthProvider>
// //     <App />
// //   </AuthProvider>
// // );


import './App.css';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../component/Navbar';
import { useSelector } from 'react-redux';
import FetchItem from '../component/FetchItem';
function App() {
  const location = useLocation();
  // Conditionally render Navbar for non-login/signup pages
  const hideNavbarRoutes = ['/login', '/signup'];
  const showNavbar = !hideNavbarRoutes.includes(location.pathname);
  // Check if the current route is Home
  const isHomeRoute = location.pathname === '/home';
  return (
    <div className="app">
      {/* Render Navbar only for routes other than login/signup */}
      {showNavbar && <Navbar />}
      
      {/* Render FetchItem only on /home */}
      {isHomeRoute && <FetchItem />}
      
      {/* Render the rest of the app */}
      <Outlet />
    </div>
  );
}
export default App;