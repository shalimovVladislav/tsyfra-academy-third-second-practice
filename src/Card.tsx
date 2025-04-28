import React from 'react';

interface CardProps {
  title: string;
  content: string;
  buttonText: string;
  onButtonClick: () => void;
}

const Card: React.FC<CardProps> = ({ title, content, buttonText, onButtonClick }) => {
  return (
    <div className="max-w-sm p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-gray-700 mb-6">{content}</p>
      <button
        onClick={onButtonClick}
        className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Card;
