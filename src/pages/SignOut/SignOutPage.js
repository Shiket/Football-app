import React from 'react';

import { withFirebase } from '../../components/Firebase';

const SignOut = ({ firebase }) => (
    <button type="button" onClick={firebase.doSignOut}>
        Sign Out
  </button>
);

export const SignOutButton = withFirebase(SignOut);