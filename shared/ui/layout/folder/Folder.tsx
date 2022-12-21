import React from 'react';
import { Texture } from '../texture';

export const Folder = ({ children }: React.ComponentProps<'main'>) => {
  return (
    <>
      <main
        className="relative right-0 min-h-[90vh] w-[90vw] before:absolute before:inset-0 before:-z-10
        before:rounded-t-lg before:rounded-l-lg before:bg-orange-200"
      >
        <section className="min-h-[90vh] p-8">
          <span className="absolute right-2 bottom-0 top-[30%] w-10 translate-x-full rounded-r-md rounded-tr-2xl bg-orange-200 before:absolute" />
          {children}
        </section>
      </main>
    </>
  );
};
