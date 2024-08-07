import React from 'react';
import useAuthPageFeature from '../feature/auth-page-feature';

const AuthPage: React.FC = () => {
  const { passphrase, handleChange } = useAuthPageFeature();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white rounded shadow-md">
        <input
          type="password"
          value={passphrase}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
          placeholder="Enter passphrase"
        />
      </div>
    </div>
  );
};

export default AuthPage;
