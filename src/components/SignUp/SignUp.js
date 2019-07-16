import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { withFirebase } from '../Firebase';
import { ROUTES } from '../../constants/routes';
import { SignInLink } from '../SignIn/SignIn';

import ball from '../../assets/ball.png'
import { Button, FormWrapper, Input, Form, Wrapper, BottomLinks, FormTitle, FormLogo } from '../../styleComponents'
import Layout from '../../Layout/Layout';

const SignUpPage = () => (
    <Layout bg>
        <Wrapper>
            <FormWrapper>
                <Wrapper row>
                    <img src={ball} width="48" height="48" alt="ball" />
                    <FormLogo>Football app</FormLogo>
                </Wrapper>
                <FormTitle>Sign Up</FormTitle>
                <SignUpForm />
                <SignInLink />
            </FormWrapper>
        </Wrapper>
    </Layout>
);

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

class SignUpFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const { username, email, passwordOne } = this.state;

        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                // Create a user in your Firebase realtime database
                return this.props.firebase
                    .user(authUser.user.uid)
                    .set({
                        username,
                        email,
                    });
            })
            .then(authUser => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push(ROUTES.home);

            })
            .catch(error => {
                this.setState({ error });
            });

        event.preventDefault();
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error,
        } = this.state;

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === '';

        return (
            <Form onSubmit={this.onSubmit}>
                <Input
                    name="username"
                    value={username}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Full Name"
                />
                <Input
                    name="email"
                    value={email}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Email Address"
                />
                <Input
                    name="passwordOne"
                    value={passwordOne}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Password"
                />
                <Input
                    name="passwordTwo"
                    value={passwordTwo}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Confirm Password"
                />
                <Button disabled={isInvalid} type="submit">Sign Up</Button>

                {error && <p>{error.message}</p>}
            </Form>
        );
    }
}

const SignUpLink = () => (
    <BottomLinks as={Link} to={ROUTES.signUp}>
        Don't have an account? Sign Up
    </BottomLinks>
);

const SignUpForm = compose(
    withRouter,
    withFirebase,
)(SignUpFormBase);
export default SignUpPage;

export { SignUpForm, SignUpLink };
