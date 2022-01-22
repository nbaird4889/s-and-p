import { Link } from "react-router-dom"

const Nav = (props) => {
    return (
        <div className="header">
            <h1>S&P 500</h1>
            <div className="nav">
            <Link to="/">
                <div>HOME</div>
            </Link>
            <Link to="/dashboard">
                <div>DASHBOARD</div>
            </Link>
            </div>
        </div>
    );
}

export default Nav;