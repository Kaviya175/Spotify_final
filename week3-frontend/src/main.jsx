// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import App from './router/App.jsx'
// //import spotifystore from './index.jsx';
//  //import Provider from 'react-redux';
// import {Navigate, RouterProvider,createBrowserRouter} from "react-router-dom"
// import Login from './component/Login.jsx';
// import Signup from './component/Signup.jsx';
// import Home from './router/Home.jsx';
// import 'react-toastify/dist/ReactToastify.css';
// import Profile from './component/Profile.jsx';
// //import Navbar from './component/Navbar.jsx';
//  //import { createBrowserRouter } from 'react-router-dom'
// const router=createBrowserRouter([{
//   path:"/",
//   element:<App/>,
//   children:[
//     {path:"/",element:<Navigate to="/login"></Navigate>},
//     {path:"/login",element:<Login></Login>},
//     {path:"/signup",element:<Signup></Signup>},
//     {path:"/home",element:<Home></Home>},
//   ]
// }
// ]
// )
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     {/* <Provider store={spotifystore}> */}
//     <RouterProvider router
//    ={router}>
//     <App />
//     </RouterProvider>
//     {/* </Provider> */}
//   </StrictMode>,
// )



import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './router/App.jsx'
import spotifystore from './store/index.jsx';
import {Provider} from 'react-redux';
import {Navigate, RouterProvider,createBrowserRouter} from "react-router-dom"
import Login from './component/Login.jsx';
import Signup from './component/Signup.jsx';
import Home from './router/Home.jsx';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './component/PrivateRoute.jsx';
import { AuthProvider } from './AuthContext.jsx';
import Podcast from './component/Podcast.jsx';
import Music from './component/Music.jsx';
import MusicSearch from './component/MusicSearch.jsx';
// import { createBrowserRouter } from 'react-router-dom'
import Whislist from './router/Whislist.jsx';
import Account from './component/Account.jsx';
import ViewMusic from './component/ViewMusic.jsx';
import AddSong from './component/AddSong.jsx';
import FetchItem from './component/FetchItem.jsx';
const router=createBrowserRouter([{
  path:"/",
  element:<App/>,
  children:[
    {path:"/",element:<Navigate to="/login"></Navigate>},
    {path:"/login",element:<Login></Login>},
    {path:"/signup",element:<Signup></Signup>},
    {path:"/home",element:
      <PrivateRoute>
      <Home></Home>
      </PrivateRoute>
    },
    {
      path:"/podcast",element:<Podcast></Podcast>
    },
    {
      path:"/All",element:<Home></Home>
    },
    {
      path:"/music",element:<Music></Music>
    },
    {
      path:"/musicsearch",element:<MusicSearch></MusicSearch>
    },
    {
      path:"/whislist",element:<Whislist></Whislist>
    },
    {
      path:"/addsong",element:<AddSong></AddSong>
    },
    {
      path:"/viewmusic",element:<ViewMusic></ViewMusic>
    },
    {
      path:"/account",element:<Account></Account>
    },
  ]
}
]
)
createRoot(document.getElementById('root')).render(
  
    <Provider store={spotifystore}>
    <AuthProvider>
    <RouterProvider router
   ={router}>
    <App />
    </RouterProvider>
    </AuthProvider>
    </Provider>
   
  
)