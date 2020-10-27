import React from 'react';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import { auth, SignInWithGoogle } from '../../firebase/firebase.utils';
import './sign-in.styles.scss';


class SignIn extends React.Component {

    constructor() {
        super();

        this.state = {
            email: "",
            password: ""
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch (error) {
            console.log(error);
        }

        console.log(event);
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <p>Sign in with your email and password.</p>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        label="Email"
                        name="email"
                        type="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                    />
                    <FormInput
                        label="Password"
                        name="password"
                        type="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                    />
                    <div className="sign-in__buttons">
                        <Button type="submit">Sign In</Button>
                        <Button onClick={SignInWithGoogle} isGoogleSignIn={true}>Sign In With Google</Button>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default SignIn;