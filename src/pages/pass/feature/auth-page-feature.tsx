import React, { useState } from 'react';

const useAuthPageFeature = () => {
  const [passphrase, setPassphrase] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassphrase(e.target.value);
  };

  return {
    passphrase,
    handleChange,
  };
};

export default useAuthPageFeature;
