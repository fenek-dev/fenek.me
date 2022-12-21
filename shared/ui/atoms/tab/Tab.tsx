import Link from 'next/link';
import React from 'react';
import cn from 'classnames';

export interface TabProps {
  className?: string;
  href: string;
}

export const Tab = ({ href, className }: TabProps) => {
  return (
    <Link href={href}>
      <li
        className={cn(
          'relative z-10 inline-block p-1 px-4 text-lg tracking-wide text-slate-700 before:absolute before:inset-0 before:-z-10 before:rounded-t-xl before:bg-orange-100 before:[filter:url(#wavy)]',
          className,
        )}
      >
        Tab
      </li>
    </Link>
  );
};
