import React from 'react';
import { NavButton, Navbar } from 'shared';
import 'styles/dist.css';

export default function Home() {
  return (
    <Navbar>
      <NavButton>+</NavButton>
      <NavButton>+</NavButton>
      <NavButton>+</NavButton>
      <NavButton>+</NavButton>
      <NavButton>+</NavButton>
    </Navbar>
  );
}
