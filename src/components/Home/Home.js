import React, { useContext } from 'react';
import { AuthUserContext } from '../Session';

const HomePage = () => {
  const authUser = useContext(AuthUserContext);
  if (!!authUser) return null;
  return (
    <div>
      <h1>Home Page</h1>
      <p>The Home Page is accessible by every signed in user.</p>
    </div>
  );
};
