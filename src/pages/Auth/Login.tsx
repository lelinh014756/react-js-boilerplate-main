import AuthLogin from '@views/auth/AuthLogin';
import AuthWrapper1 from '@views/pages/athentication/wrapper/AuthWrapper1';
import React from 'react';

function Login() {
  return (
    <AuthWrapper1>
      <AuthLogin />
    </AuthWrapper1>
  );
}

export default Login;
