import { Search } from 'lucide-react';

export default function SearchInput() {
  return (
    <div className='flex w-3xl items-center gap-2 rounded-full bg-white px-5 py-3'>
      <Search className='text-gray-500' />
      <input className='w-full focus:outline-none' />
    </div>
  );
}
