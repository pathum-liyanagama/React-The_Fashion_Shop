import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectShowCartDropdown } from '../../redux/cart/cart.selectors';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import './header.styles.scss';

const Header = ({ currentUser, showCartDropdown }) => (
    <nav className="header">
        <Link className="logo" to="/">
            <Logo className="logo" />
        </Link>
        <div className="nav-items">
            <Link to="/shop">SHOP</Link>
            <Link to="/contact">CONTACT</Link>
            {currentUser ? <div onClick={() => auth.signOut()}>SIGN OUT</div>
                : <Link to="/signin">SIGN IN</Link>
            }
            <CartIcon />
        </div>
        { showCartDropdown && <CartDropdown />}
    </nav>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    showCartDropdown: selectShowCartDropdown
})

export default connect(mapStateToProps)(Header);