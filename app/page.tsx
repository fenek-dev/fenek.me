import 'styles/dist.css';
import 'styles/globals.css';
import React from 'react';

export default function Home() {
  return (
    <section className="relative pt-28">
      <div className="absolute bottom-8 right-8 rotate-[-26deg] rounded-xl border-4 border-green-600 pt-3 text-5xl font-bold uppercase leading-none text-green-600">
        Declassified
      </div>

      <h1 className="text-center text-6xl uppercase tracking-wider">
        Special Investigation File
      </h1>

      <div className="my-10 rounded-md border-2 border-slate-800 px-4 py-8 text-xl tracking-widest">
        <p>
          Case Name:{' '}
          <strong className="relative text-black before:absolute before:bottom-0 before:w-[20.8rem] before:border-b-2 before:border-black ">
            Arthur Vorokov
          </strong>
        </p>
        <p className="my-4">
          Case #:{' '}
          <strong className="relative text-black before:absolute before:bottom-0 before:w-96 before:border-b-2 before:border-black  ">
            13012003
          </strong>
        </p>
        <p>
          File #:{' '}
          <strong className="relative text-black before:absolute before:bottom-0 before:w-96 before:border-b-2 before:border-black ">
            42
          </strong>
        </p>
      </div>
      <div className="my-14 rounded-md border-2 border-slate-800 px-4 py-8 text-xl tracking-widest">
        <h4 className="text-2xl tracking-wider">This information is:</h4>
        <ul className="ml-4 mt-2 flex flex-col gap-2">
          <li>Non-Restricted</li>
          <li>Non-Confidential</li>
          <li>Shareable</li>
        </ul>
      </div>
    </section>
  );
}
