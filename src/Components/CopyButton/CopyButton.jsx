import React from 'react';
import { FaCopy } from 'react-icons/fa';
import { toast } from 'react-hot-toast';

const CopyEmailButton = ({ email }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(email)
      .then(() => {
        toast.success('Email copied to clipboard!');
      })
      .catch((err) => {
        toast.error('Failed to copy email.');
        console.error('Failed to copy email: ', err);
      });
  };

  return (
    <button 
      onClick={copyToClipboard} 
      className="
  
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
      <span className="mr-2">Get Email</span>
      <FaCopy />
    </button>
  );
};

export default CopyEmailButton;
