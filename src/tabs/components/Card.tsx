import React from 'react';

const Card = ({ title, value, icon, color = "text-white" }) => {
  return (
    <div
      title={value}
      className=" my-4 flex flex-col justify-center items-center gap-4 border-2 border-dashed border-gray-500/50 p-4 rounded-md h-auto min-w-96  dark:text-dark-important-text"
    >
      <div className="flex gap-2 items-center justify-center">
        <span className={`font-semibold text-lg md:text-2xl ${color}`}>{title}</span>
        <div className={`w-auto h-auto ${color}`}>{icon}</div> {/* Render the passed SVG */}
      </div>
      <span className=" text-sm text-center text-light-important-text dark:text-dark-important-text">
        {title}
      </span>
    </div>
  );
};

export default Card;
