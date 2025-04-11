// src/components/GoogleAuth.js

import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import './GoogleAuth.css';

const GoogleAuth = () => {
  const handleSuccess = (credentialResponse) => {
    console.log('Google login successful:', credentialResponse);
    // Add further logic such as storing tokens or redirecting
  };

  const handleError = () => {
    console.error('Google login failed');
  };

  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <div className="google-auth-container">
        <GoogleLogin
          onSuccess={handleSuccess}
          onError={handleError}
          useOneTap
          theme="outline"
          size="large"
          width="100%"
          text="signin_with"
        />
      </div>
    </GoogleOAuthProvider>
  );
};

export default GoogleAuth;
