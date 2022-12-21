import React from 'react';

export default function Dossier() {
  return (
    <article>
      <section>
        <h1 className="text-2xl font-bold uppercase sm:text-4xl">
          Arthur Vorokov
        </h1>
        <div className="m-auto h-48 w-40 border-2  border-dashed border-slate-700 sm:float-right"></div>
        <ul className="mb-16 mt-5 flex flex-col gap-4">
          <li className="font">
            Date of birth:{' '}
            <strong className="ml-4 whitespace-nowrap">13 Jan 2003</strong>
          </li>
          <li>
            Current location: <strong className="ml-4">Montenegro</strong>
          </li>
          <li>
            Languages: <strong className="ml-4">English, Russian</strong>
          </li>
        </ul>
      </section>
      <section>
        <h2 className="text-center text-2xl font-bold uppercase">
          Technologies
        </h2>
        <ul className="grid grid-cols-2 gap-4 pt-5 pb-4">
          <li>HTML / CSS</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>Next.js</li>
          <li>SASS</li>
          <li>TailwindCSS</li>
          <li>Redux</li>
        </ul>
        <details>
          <summary className="cursor-pointer">Other tools</summary>
          <ul className="grid grid-cols-2 gap-4 py-4">
            <li>Node.js</li>
            <li>Git / GitHub</li>
            <li>Nx</li>
            <li>Jest</li>
            <li>React testing library</li>
            <li>Storybook</li>
            <li>MUI / Ant Design</li>
            <li>Webpack / Vite</li>
            <li>Framer motion</li>
            <li>Figma</li>
          </ul>
        </details>
      </section>
    </article>
  );
}
