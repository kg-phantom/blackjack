import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <Link to='/' className="link"><h1>Blackjack</h1></Link>
        </header>
    );
}

export default Header;