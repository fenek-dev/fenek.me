import React from 'react';

export const NavButton = ({ children }: React.ComponentProps<'button'>) => {
  return (
    <button className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-700 bg-transparent text-black opacity-75 shadow-inner shadow-gray-300/40 transition duration-300 ease-in">
      {children}
    </button>
  );
};
