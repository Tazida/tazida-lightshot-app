import React from 'react';

const Card = ({ title, content }) => {
  return (
    <div className="min-w-[250px] p-4 m-2 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  );
};

export default Card;