import React from 'react';
import { Texture } from '../texture';

export const Page = () => {
  return (
    <>
      <div className="relative z-10 p-8 text-lg tracking-wide text-slate-700 before:absolute before:inset-0 before:-z-10 before:rounded-md before:bg-orange-100 before:shadow-lg before:[filter:url(#wavy)]">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum vero alias
        enim laudantium exercitationem veritatis tempore dolore nobis
        repellendus quaerat, distinctio commodi consequuntur beatae voluptatum
        assumenda odio dolorum provident dicta.
      </div>
      <Texture id="wavy" scale="5" />
    </>
  );
};
