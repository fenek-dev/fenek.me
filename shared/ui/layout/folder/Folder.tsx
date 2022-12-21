import React from 'react';
import { Texture } from '../texture';

export const Folder = ({ children }: React.ComponentProps<'main'>) => {
  return (
    <>
      <main
        className="relative right-0 grid min-h-[90vh] w-[90vw] grid-cols-1 before:absolute
        before:inset-0 before:-z-10 before:rounded-t-lg before:bg-orange-200 before:[filter:url(#folder)] xl:grid-cols-2"
      >
        <section
          className="page-left absolute top-0 bottom-0 left-1 w-96 -translate-x-full p-8 
        before:absolute before:inset-0 before:-z-10 before:rounded-t-lg before:bg-orange-200 before:[filter:url(#folder)] 
        xl:relative xl:w-auto xl:translate-x-0"
        >
          <span className="absolute left-2 bottom-0 top-[30%] w-10 -translate-x-full rounded-l-md rounded-tl-2xl bg-orange-200 [filter:url(#folder)]" />
        </section>
        <section className="page-right p-8">
          <span className="absolute right-2 bottom-0 top-[30%] w-10 translate-x-full rounded-r-md rounded-tr-2xl bg-orange-200 [filter:url(#folder)] before:absolute" />
          {children}
        </section>
      </main>
      <Texture id="folder" scale="4" />
    </>
  );
};
