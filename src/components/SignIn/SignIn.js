import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { SignUpLink } from '../SignUp/SignUp';
import { PasswordForgetLink } from '../PasswordForget/PasswordForget';
import { withFirebase } from '../Firebase';
import { ROUTES } from '../../constants/routes';
import { Link } from 'react-router-dom'
import ball from '../../assets/ball.png'
import { Layout, Button, Input, Form, FormWrapper, Wrapper, FormLogo, FormTitle, BottomLinks } from '../../styleComponents';

const SignInPage = () => (
    <Layout>
        <Wrapper>
            <FormWrapper>
                <Wrapper row>
                    <img src={ball} width="48" height="48" alt="ball" />
                    <FormLogo>Football app</FormLogo>
                </Wrapper>
                <FormTitle>Sign In</FormTitle>
                <SignInForm />
                <PasswordForgetLink />
                <SignUpLink />
            </FormWrapper>
        </Wrapper>
    </Layout>
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

    componentDidMount() {
        document.body.classList.add("bgForm");
        console.log(this.props)
    }

    onSubmit = event => {
        const { email, password } = this.state;

        this.props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push(ROUTES.home);
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
    <BottomLinks as={Link} to={ROUTES.signIn}>
        Do you have an account? Sign In
    </BottomLinks>
);


const SignInForm = compose(
    withRouter,
    withFirebase,
)(SignInFormBase);

export default SignInPage;

export { SignInForm, SignInLink};