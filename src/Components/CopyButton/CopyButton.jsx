import React from 'react';
import { FaCopy } from 'react-icons/fa';

const CopyEmailButton = ({ email }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(email).then(() => {
      alert('Email copied to clipboard!');
    }).catch((err) => {
      console.error('Failed to copy email: ', err);
    });
  };

  return (
    <button 
      onClick={copyToClipboard} 
      className="
       xl:w-[60%]
       lg:w-[100%]
       sm:w-[60%]
       w-[100%]
        flex items-center 
        border-2 border-black
        text-black 
        px-4 py-2 
        rounded-[8px] 
        cursor-pointer 
        font-semibold
        hover:bg-black
        hover:text-white
        justify-center
      "
    >
      <span className="mr-2">{email}</span>
      <FaCopy />
    </button>
  );
};

export default CopyEmailButton;
