import React from 'react';
import usePassPageLogic from '../logic/pass-page-logic';

const PassPage: React.FC = () => {
  const { passphrase, handleChange } = usePassPageLogic();

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

export default PassPage;