import React from 'react';
import './button.styles.scss';

const Button = ({ children, isGoogleSignIn, ...otherProps }) => (
    <button className={`button-submit ${isGoogleSignIn && 'button-googleSignin'}`} {...otherProps}>
        {children}
    </button>

)

export default Button;
