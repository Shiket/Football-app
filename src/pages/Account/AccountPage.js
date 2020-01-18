import React from 'react';
import { PasswordChange } from '../index';
import { withAuthorization } from '../../components/Session';
import { FormWrapper, WrapperCenter, FormTitle, FullPageWrapper }
    from '../../styleComponents/index';
const Account = () => (
    <FullPageWrapper>
        <WrapperCenter>
            <FormWrapper>
                <FormTitle>Change password</FormTitle>
                <PasswordChange />
            </FormWrapper>
        </WrapperCenter>
    </FullPageWrapper>
);

const authCondition = authUser => !!authUser;

export const AccountPage = withAuthorization(authCondition)(Account);