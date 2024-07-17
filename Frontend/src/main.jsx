import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Dashboard from './pages/Dashboard.jsx';
import Feed from './pages/Feed.jsx';
import MarketPlace from './pages/MarketPlace.jsx';
import GlobalProvider from './context/Global/GlobalContext.jsx';
import Matcher from './pages/Matcher.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home/>)
    ,
  },
  {
    path: "/dashboard",
    element: <Dashboard/>,
  },
  {
    path: "/feed",
    element: <Feed/>,
  },
  {
    path: "/beats-market",
    element: <MarketPlace/>,
  },
  {
    path: "/match-beats",
    element: <Matcher/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <GlobalProvider>
    <RouterProvider router={router} />
  </GlobalProvider>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
)
