import React from 'react';
import { Texture } from '../texture';

export const Folder = ({ children }: React.ComponentProps<'main'>) => {
  return (
    <>
      <main
        className="relative right-0 grid min-h-[90vh] w-[90vw] grid-cols-2
        before:absolute before:inset-0 before:-z-10 before:rounded-t-lg before:bg-orange-200 before:[filter:url(#folder)]"
      >
        <span className="absolute left-2 bottom-0 top-[30%] w-10 -translate-x-full rounded-l-md rounded-tl-2xl bg-orange-200 [filter:url(#folder)]" />
        <span className="absolute right-2 bottom-0 top-[30%] w-10 translate-x-full rounded-r-md rounded-tr-2xl bg-orange-200 [filter:url(#folder)]" />
        <section className="page-left p-8"></section>
        <section className="page-right p-8">{children}</section>
      </main>
      <Texture id="folder" scale="4" />
    </>
  );
};
