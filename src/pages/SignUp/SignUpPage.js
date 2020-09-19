import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from '../../components/Firebase';
import * as ROUTES from '../../constants/routes';
import { SignInLink } from '../index';
import { Button, Input, FormWrapper, Form, WrapperCenter, FormTitle,
         BottomLinks,
         FullPageWrapper} from '../../styleComponents/index';

const SignUpPage = () => (
    <FullPageWrapper>
        <WrapperCenter>
            <FormWrapper>
                <FormTitle>Sign Up</FormTitle>
                <SignUpForm />
                <SignInLink />
            </FormWrapper>
        </WrapperCenter>
    </FullPageWrapper>
);

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    favourites:'',
    error: null,
};

class SignUpFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    handleOnSubmit = event => {
        const { username, email, passwordOne, favourites } = this.state;
        const { firebase, history} = this.props;

            firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                // Create a user in your Firebase realtime database
                return firebase
                    .user(authUser.user.uid)
                    .set({
                        username,
                        email,
                        favourites
                    });
            })
            .then(authUser => {
                this.setState({ ...INITIAL_STATE });
                history.push(ROUTES.LANDING);

            })
            .catch(error => {
                this.setState({ error });
            });

        event.preventDefault();
    };

    handleOnChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const { username, email, passwordOne, passwordTwo, error } = this.state;

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === '';

        return (
            <Form onSubmit={this.handleOnSubmit}>
                <Input
                    name="username"
                    value={username}
                    onChange={this.handleOnChange}
                    type="text"
                    placeholder="Full Name"
                />
                <Input
                    name="email"
                    value={email}
                    onChange={this.handleOnChange}
                    type="text"
                    placeholder="Email Address"
                />
                <Input
                    name="passwordOne"
                    value={passwordOne}
                    onChange={this.handleOnChange}
                    type="password"
                    placeholder="Password"
                />
                <Input
                    name="passwordTwo"
                    value={passwordTwo}
                    onChange={this.handleOnChange}
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
    <BottomLinks as={Link} to={ROUTES.SIGN_UP}>
        Don't have an account? Sign Up
    </BottomLinks>
);

const SignUpForm = compose(
    withRouter,
    withFirebase,
)(SignUpFormBase);

export { SignUpForm, SignUpLink, SignUpPage };