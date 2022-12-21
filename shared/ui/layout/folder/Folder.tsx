import React from 'react';

export const Folder = ({ children }: React.ComponentProps<'main'>) => {
  return (
    <main
      className="relative right-0 grid min-h-[90vh] w-[90vw] grid-cols-2 rounded-t-lg bg-orange-200 
      
      before:absolute before:left-0 before:bottom-0 before:top-[30%] before:w-10 before:-translate-x-full before:rounded-tl-2xl before:bg-orange-200

      after:absolute after:right-0 after:bottom-0 after:top-[30%] after:w-10 after:translate-x-full after:rounded-r-md after:rounded-tr-2xl after:bg-orange-200
    "
    >
      <section className="page-left p-8"></section>
      <section className="page-right p-8">{children}</section>
    </main>
  );
};
