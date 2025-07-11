'use client';
import { useState } from 'react';
import SearchInput from './_components/SearchInput';

export default function Home() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <main>
      <header className='flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center justify-center text-white'>
          <h1 className=''>MeanMachine</h1>
          <h3>Bridging the language gap with AI speed</h3>
        </div>
        <SearchInput value={searchValue} onChange={setSearchValue} />
      </header>
    </main>
  );
}
