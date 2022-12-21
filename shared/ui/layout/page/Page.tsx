import React from 'react';
import { Nav } from 'app/Nav';
import { Texture } from '../texture';

export const Page = ({ children }: React.PropsWithChildren<unknown>) => {
  return (
    <div>
      <Nav
        routes={['/Dossier', '/Experience', '/Contacts']}
        className="absolute top-80 -right-2 flex translate-x-[45%] rotate-90 gap-1 md:top-2 md:right-auto md:left-auto md:translate-y-0 md:translate-x-0 md:rotate-0"
      />
      <div className="relative z-10 min-h-[80vh] p-8 text-xl tracking-wide text-slate-700 before:absolute before:inset-0 before:-z-10 before:rounded-md before:bg-orange-100 before:shadow-lg before:[filter:url(#wavy)]">
        {children}
      </div>
      <Texture id="wavy" scale="5" />
    </div>
  );
};
