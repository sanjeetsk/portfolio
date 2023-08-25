import { NavLink } from "react-router-dom"
import './Navbar.css'

const Navbar = () => {

    return(
        <div id="navbar">
            <NavLink to="https://drive.google.com/file/d/1fZrB4E2SK6oVJN9ln7uYIiH93o4xdYAL/view?usp=sharing">Resume</NavLink>
            <div id="navlinks">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/project/">Projects</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>
        </div>
    )
}

export default Navbar