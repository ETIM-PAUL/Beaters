import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Dashboard /> */}
    {/* <Marketplace /> */}
    {/* <Matchmaking /> */}
    <div className='layout-ctn flx'>
      <div className="sidebar-ctn"></div>
      <div className="body-ctn">
        <Outlet />
      </div>
    </div>
    </>
  )
}

export default App
