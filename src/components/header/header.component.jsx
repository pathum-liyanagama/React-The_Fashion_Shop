import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import './header.styles.scss';

const Header = ({ currentUser }) => (
    <nav className="header">
        <Link className="logo" to="/">
            <Logo className="logo" />
        </Link>
        <div className="nav-items">
            <Link to="/shop">SHOP</Link>
            <Link to="/contact">CONTACT</Link>
            {
                currentUser ?
                    <div onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link to="/signin">SIGN IN</Link>
            }

        </div>
    </nav>
)

export default Header;