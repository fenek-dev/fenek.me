'use client';
import { usePathname } from 'next/navigation';
import React from 'react';
import { Tab } from 'shared';

export interface NavProps {
  routes: string[];
  className?: string;
}

export const Nav = ({ routes, className }: NavProps) => {
  const pathname = usePathname();
  return (
    <nav className={className}>
      <Tab href="/" className="z-0" active={pathname === '/'}>
        Overview
      </Tab>
      {routes.map((route) => (
        <Tab
          key={route}
          href={route.toLowerCase()}
          className="z-0"
          active={pathname === route.toLowerCase()}
        >
          {route.replace('/', '')}
        </Tab>
      ))}
    </nav>
  );
};
