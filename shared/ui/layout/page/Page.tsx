import React from 'react';
import { Nav } from 'shared/ui/molecules';
import { Texture } from '../texture';

export const Page = ({ children }: React.PropsWithChildren<unknown>) => {
  return (
    <div>
      <Nav
        routes={['Dossier', 'Work', 'Bio', 'Contacts']}
        className="absolute top-2 flex gap-1"
      />
      <div className="relative z-10 p-8 text-lg tracking-wide text-slate-700 before:absolute before:inset-0 before:-z-10 before:rounded-md before:bg-orange-100 before:shadow-lg before:[filter:url(#wavy)]">
        {children}
      </div>
      <Texture id="wavy" scale="5" />
    </div>
  );
};
