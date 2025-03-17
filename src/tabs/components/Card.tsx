import React from 'react';

const Card = ({ title, value, icon, color = "text-white" }) => {
  return (
    <div
      title={title} // Show correct tooltip
      className="my-4 flex flex-col justify-center items-center gap-4 border-2 border-dashed border-gray-500/50 p-4 rounded-md h-auto min-w-96 dark:text-dark-important-text"
    >
      <div className="flex gap-2 items-center justify-center">
        <span className={`font-semibold text-lg md:text-2xl ${color}`}>
          {title}
        </span>
        {icon && <div className={`w-6 h-6 ${color}`}>{icon}</div>} {/* Ensure icon renders */}
      </div>
      <span className="text-sm text-center text-light-important-text dark:text-dark-important-text">
        {value} {/* Correctly display value */}
      </span>
    </div>
  );
};

export default Card;
