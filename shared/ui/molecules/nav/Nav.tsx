import React, { useState } from 'react';
import { Tab } from 'shared';

export interface NavProps {
  routes: string[];
  className?: string;
}

export const Nav = ({ routes, className }: NavProps) => {
  return (
    <nav className={className}>
      {routes.map((route) => (
        <Tab key={route} href={route.toLowerCase()} className="z-0">
          {route}
        </Tab>
      ))}
    </nav>
  );
};
