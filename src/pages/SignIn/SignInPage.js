import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from '../../components/Firebase';
import * as ROUTES from '../../constants/routes';
import { SignUpLink, PasswordForgetLink } from '../index';
import { Link } from 'react-router-dom'
import { Button, Input, FormWrapper, Form, WrapperCenter, FormTitle, BottomLinks, FullPageWrapper}
        from '../../styleComponents/index';

const SignInPage = () => (
    <FullPageWrapper>
        <WrapperCenter>
            <FormWrapper>
                <FormTitle>Sign In</FormTitle>
                <SignInForm />
                <PasswordForgetLink />
                <SignUpLink />
            </FormWrapper>
        </WrapperCenter>
    </FullPageWrapper>
);

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};

class SignInFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const { email, password } = this.state;

        this.props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push(ROUTES.LANDING);
            })
            .catch(error => {
                this.setState({ error });
            });

        event.preventDefault();
    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const { email, password, error } = this.state;

        const isInvalid = password === '' || email === '';

        return (
            <Form onSubmit={this.onSubmit}>
                <Input
                    name="email"
                    value={email}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Email Address"
                />
                <Input
                    name="password"
                    value={password}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Password"
                />
                <Button disabled={isInvalid} type="submit">
                    Sign In
                </Button>

                {error && <p>{error.message}</p>}
            </Form>
        );
    }
}
const SignInLink = () => (
    <BottomLinks as={Link} to={ROUTES.SIGN_IN}>
        Do you have an account? Sign In
    </BottomLinks>
);


const SignInForm = compose(
    withRouter,
    withFirebase,
)(SignInFormBase);

export { SignInForm, SignInLink, SignInPage };