import SearchInput from '@/components/SearchInput';

export default function Home() {
  return (
    <main>
      <header className='flex h-100 flex-col items-center justify-center gap-6'>
        <h1 className='font-honk text-9xl'>MeanMachine</h1>
        <SearchInput />
      </header>
    </main>
  );
}
