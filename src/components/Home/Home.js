import React from 'react';
import { AuthUserContext } from '../Session';

const HomePage = () => {
    return (
        <AuthUserContext.Consumer>
          {authUser => !!authUser ? (
              <div>
                <h1>Home Page</h1>
                <p>The Home Page is accessible by every signed in user.</p>
              </div>
          ) : null}
        </AuthUserContext.Consumer>

    )
};
