import AuthRegister from '@views/auth/AuthRegister';
import AuthWrapper1 from '@views/pages/athentication/wrapper/AuthWrapper1';
import React from 'react';

function Register() {
  return (
    <AuthWrapper1>
      <AuthRegister />
    </AuthWrapper1>
  );
}

export default Register;
