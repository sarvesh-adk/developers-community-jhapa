import React from 'react';

const Globe = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`absolute ${className}`}>
      <div className="h-[40rem] w-[40rem] animate-globe">
        <div className="absolute h-full w-full rounded-full border border-gray-800/50" style={{ transform: 'rotateX(75deg)' }} />
        <div className="absolute h-full w-full rounded-full border border-gray-800/50" style={{ transform: 'rotateX(60deg)' }} />
        <div className="absolute h-full w-full rounded-full border border-gray-800/50" style={{ transform: 'rotateX(45deg)' }} />
        <div className="absolute h-full w-full rounded-full border border-gray-800/50" style={{ transform: 'rotateX(30deg)' }} />
        <div className="absolute h-full w-full rounded-full border border-gray-800/50" style={{ transform: 'rotateX(15deg)' }} />
        <div className="absolute h-full w-full rounded-full border border-gray-800/50" />
      </div>
    </div>
  );
};

export default Globe;