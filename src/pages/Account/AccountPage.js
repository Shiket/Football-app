import React from 'react';
import { AuthUserContext } from '../../components/Session';
import { PasswordForgetForm, PasswordChange} from '../index';
import { withAuthorization } from '../../components/Session';

const Account = () => (
    <AuthUserContext.Consumer>
        {authUser => (
            <div>
                <h1>Account: {authUser.email}</h1>
                <PasswordForgetForm />
                <PasswordChange />
            </div>
        )}
    </AuthUserContext.Consumer>
);

const authCondition = authUser => !!authUser;

export const AccountPage = withAuthorization(authCondition)(Account);