import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/logo.svg';
import './header.styles.scss';

const Header = () => (
    <nav className="header">
        <Link className="logo" to="/">
            <Logo className="logo" />
        </Link>
        <div className="nav-items">
            <Link to="/shop">SHOP</Link>
            <Link>CONTACT</Link>
            <Link>SIGN IN</Link>
        </div>
    </nav>
)

export default Header;