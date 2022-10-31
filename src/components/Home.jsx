import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'
import './Home.css'

function Home() {

  return (
    <div className ="Homecontainer"> 
       <nav className="Navigation">
         <button className = "button-33">
        <Link className='text-link'to="/about">About</Link> {" "}
         </button>
          <button className = "button-33">
        <Link className='text-link'to="/users">Users</Link> 
         </button>
      </nav>
      <Outlet />
      <h1>Just another AltSchool Assignment....</h1>
    </div>

  )
}

export default Home;