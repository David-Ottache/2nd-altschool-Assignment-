import {Link} from "react-router-dom"
import './About.css'

function About() {

  return (
    <div className = "Aboutcontainer"> 
      <h1> About </h1>
      <p> Setup react-router, implement Nested routes, 404 page, and Error boundary. Set up client-side pagination using randomuser.me API in one of your routes called Users - you should show the prev, next, and navigation to individual pages 1, 2, 3, 4, 5 etc. Implement accessibility and disabled state and API loading states. </p>
      <button className = "button-33">
        <Link className ="text-link" to="/">Back</Link> 
      </button>
    </div>

  )
}

export default About;