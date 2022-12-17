import React from 'react';

export const Navbar = ({ children }: React.ComponentProps<'nav'>) => {
  return (
    <nav className="fixed inset-x-auto bottom-4 right-auto left-1/2 flex -translate-x-1/2 gap-2 rounded-full border-2 border-neutral-700 bg-neutral-800 p-2 px-4 opacity-90 shadow-inner shadow-neutral-400/40">
      {children}
    </nav>
  );
};
