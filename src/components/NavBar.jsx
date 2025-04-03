import { Link } from "react-router"

export const NavBar = () => {
    return (
        <h2  className="header dashboard">
            <div>
                <Link to="/home"> Home </Link>
                <Link to="/articles"> Articles </Link>
                <Link to="/topics"> Topics </Link>
                <Link to="/users"> Users </Link>
            </div>
        </h2>
    )
}