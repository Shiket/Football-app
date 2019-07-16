import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { SignUpLink } from '../SignUp/SignUp'
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

import ball from '../../img/ball.png'
import Layout from '../../Layout/Layout';

import Button from '../../styleComponents/Button/Button';
import FormWrapper from '../../styleComponents/Form/FormWrapper';
import Input from '../../styleComponents/Form/Input'
import Form from '../../styleComponents/Form/Form';
import Wrapper from '../../styleComponents/Wrapper/Wrapper'
import BottomLinks from '../../styleComponents/Form/BottomLinks';
import FormLogo from '../../styleComponents/Form/FormLogo';
import FormTitle from '../../styleComponents/Form/FormTitle'


const PasswordForgetPage = () => (
    <Layout>
        <Wrapper>
            <FormWrapper>
                <Wrapper row>
                    <img src={ball} width="48" height="48" alt="ball" />
                    <FormLogo>Football app</FormLogo>
                </Wrapper>
                <FormTitle>Sign Up</FormTitle>
                <PasswordForgetForm />
                <SignUpLink />
            </FormWrapper>
        </Wrapper>
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

export default PasswordForgetPage;

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export { PasswordForgetForm, PasswordForgetLink };