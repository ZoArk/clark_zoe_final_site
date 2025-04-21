import React from 'react';
import myImage from '../image/pic.jpg';



const BasicInfo = () => {
  return (
    <div className="p-6">
      <img src={myImage} alt="Your face" className="w-32 h-32 rounded-full mb-4" />
      <h1 className="text-3xl font-bold">Zoe Clark</h1>
      <p className="mt-2 text-gray-700">
        Hi! I'm a web developer who loves building cool things. I work with React, Rails, and more.
      </p>
    </div>
  );
};

export default BasicInfo;

