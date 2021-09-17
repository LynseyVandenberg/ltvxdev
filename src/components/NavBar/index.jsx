// import "./style.css";
import { Link } from "react-router-dom";


const NavBar = () => {

    return <nav className="navbar">
        <div className="nav-wrapper">
            <div className="list-wrapper">
                <a href="/"> Home </a>
                -
                <a href="/projects"> Projects </a>
                -
                <a href="/contact"> Contact </a>
                -
                <a href="/about"> About </a>
                -
                <a href="/resume"> Resume </a>

                <div class="topnav">

                </div>
            </div>
        </div>
    </nav>

}



export default NavBar
