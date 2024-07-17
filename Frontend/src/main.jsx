import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Dashboard from './pages/Dashboard.jsx'
import Marketplace from './pages/Matchmaking.jsx'
import Matchmaking from './pages/Matchmaking.jsx'
import Feed from './pages/Feed.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Dashboard />} />
          <Route path='marketplace' element={<Marketplace />} />
          <Route path='matchmaking' element={<Matchmaking />} />
          <Route path='feed' element={<Feed />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
