import { Link } from "react-router"

export const Header = () => {
    return (
        <header  className="header dashboard">
            <Link to="/home">
            <div>
                <h1> NC News </h1>
            </div>
            </Link>
        </header>
    )
}