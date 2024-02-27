import { Link } from "react-router-dom";
import "./header.css"


function Header () {
    return (
        <>
            <div className="header">
                <div className="logo">logo</div>
                <div className="navbar">
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/accounts'>Accounts</Link></li>
                        <li><Link to='/giftcards'>Gift Cards</Link></li>
                        <li><Link to='/serialkeys'>Serial keys</Link></li>
                    </ul>
                </div>
                <div className="profil">
                    <button className="sign-up-btn">Sign up</button>
                    <button className="sign-in-btn">Sign in</button>
                </div>
            </div>
        </>
    )
}

export default Header;