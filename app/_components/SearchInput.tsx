import { Input } from '@/components/ui/input';

type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <div className='flex items-center'>
      <Input className='bg-white' value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}
