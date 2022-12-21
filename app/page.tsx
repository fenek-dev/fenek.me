import 'styles/dist.css';
import 'styles/globals.css';
import React from 'react';

export default function Home() {
  return (
    <section className="relative pt-10 md:pt-28">
      <div className="absolute bottom-2 -right-2 rotate-[-26deg] rounded-xl border-4 border-green-600 pt-3 text-2xl font-bold uppercase leading-none text-green-600 md:bottom-8 md:right-8 md:text-5xl">
        Declassified
      </div>

      <h1 className="text-center text-3xl uppercase tracking-wider md:text-6xl">
        Special Investigation File
      </h1>

      <div className="my-10 rounded-md border-2 border-slate-800 px-2 py-4 text-lg tracking-widest md:px-4 md:py-8 md:text-xl">
        <p>
          Case Name:{' '}
          <strong className="relative text-black underline">
            Arthur Vorokov
          </strong>
        </p>
        <p className="my-4">
          Case #:{' '}
          <strong className="relative text-black underline">13012003</strong>
        </p>
        <p>
          File #: <strong className="relative text-black underline">42</strong>
        </p>
      </div>
      <div className="my-14 rounded-md border-2 border-slate-800 px-2 py-4 text-lg tracking-widest md:px-4 md:py-8 md:text-xl">
        <h4 className=" text-xl tracking-wider md:text-2xl">
          This information is:
        </h4>
        <ul className="ml-4 mt-2 flex flex-col gap-2">
          <li>Non-Restricted</li>
          <li>Non-Confidential</li>
          <li>Shareable</li>
        </ul>
      </div>
    </section>
  );
}
