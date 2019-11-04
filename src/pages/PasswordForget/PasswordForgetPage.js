import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { SignUpLink } from '../index'
import { withFirebase } from '../../components/Firebase';
import * as ROUTES from '../../constants/routes';

import ball from '../../assets/ball.png'
import Layout from '../../Layout/Layout';

import { Button, FormWrapper, Input, Form, WrapperCenter,
    BottomLinks, FormLogo, FormTitle } from '../../styleComponents/index';

const PasswordForgetPage = () => (
    <Layout>
        <WrapperCenter>
            <FormWrapper>
                <WrapperCenter row>
                    <img src={ball} width="48" height="48" alt="ball" />
                    <FormLogo>Football app</FormLogo>
                </WrapperCenter>
                <FormTitle>Password Forget</FormTitle>
                <PasswordForgetForm />
                <SignUpLink />
            </FormWrapper>
        </WrapperCenter>
    </Layout>
);

const INITIAL_STATE = {
    email: '',
    error: null,
};

class PasswordForgetFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const { email } = this.state;

        this.props.firebase
            .doPasswordReset(email)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
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
        const { email, error } = this.state;

        const isInvalid = email === '';

        return (
            <Form onSubmit={this.onSubmit}>
                <Input
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Email Address"
                />
                <Button className="button-send" disabled={isInvalid} type="submit">
                    Reset My Password
        </Button>

                {error && <p>{error.message}</p>}
            </Form>
        );
    }
}

const PasswordForgetLink = () => (
    <BottomLinks as={Link} to={ROUTES.PASSWORD_FORGET}>
        Forgot Password?
    </BottomLinks>
);


const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export { PasswordForgetForm, PasswordForgetLink, PasswordForgetPage };