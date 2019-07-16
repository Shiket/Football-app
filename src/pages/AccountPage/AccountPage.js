import React from 'react';

import { AuthUserContext } from '../../components/Session';
import { PasswordForgetForm } from '../../components/PasswordForget/PasswordForget';
import PasswordChangeForm from '../../components/PasswordChange/PasswordChange';

const AccountPage = () => (
    <AuthUserContext.Consumer>
        {authUser => !!authUser ? (
            <div>
                <h1>Account: {authUser.email}</h1>
                <PasswordForgetForm />
                <PasswordChangeForm />
            </div>
        ) : null}
    </AuthUserContext.Consumer>
);
