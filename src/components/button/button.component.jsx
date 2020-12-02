import React from 'react';
import './button.styles.scss';

const Button = ({ children, inverted, isGoogleSignIn, ...otherProps }) => (
    <button className={`button 
                        ${inverted && 'inverted'}
                        ${isGoogleSignIn && 'button-googleSignin'}`} 
            {...otherProps}>
        {children}
    </button>

)

export default Button;
