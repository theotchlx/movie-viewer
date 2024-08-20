import React, { useState } from 'react';

const usePassPageLogic = () => {
  const [passphrase, setPassphrase] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassphrase(e.target.value);
  };

  const handleOnClick = () => {
    console.log('Passphrase whispered');
    fetch(`${process.env.SERVER_ADDRESS}:${process.env.SERVER_PORT}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ passphrase }),
    })
      .then((res) => {
        if (res.ok) {
          console.log('Shallpass');
        } else {
          console.log('Shantpass');
        }
      })
      .catch((err) => {
        console.log('Error:', err);
      });
  }

  return {
    passphrase,
    handleChange,
    handleOnClick,
  };
};

export default usePassPageLogic;