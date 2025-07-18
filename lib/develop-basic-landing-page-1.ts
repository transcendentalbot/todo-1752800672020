import React from 'react';
import Link from 'next/link';

export const Navigation = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-6 bg-gray-800 text-white">
      <div className="text-xl font-bold">Todo App</div>
      <ul className="flex space-x-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/todos">Todos</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};