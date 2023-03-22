import React from "react";

export const Header = () => {
  return (
    <header className="w-full container m-auto pt-4 flex justify-between text-gray-400">
      <div className="flex gap-40 text-sm uppercase">
        <span className="text-gray-300">
          Arthur <br /> Vorokov
        </span>
        <span>
          Frontend developer <br /> 2021 — 2023
        </span>
      </div>
      <div>
        <button className="border-gray-400 p-1 px-3 rounded-full border text-base uppercase">
          Contact
        </button>
      </div>
    </header>
  );
};
