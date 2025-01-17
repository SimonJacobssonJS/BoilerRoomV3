import { useState } from 'react';

type UserFormProps = {
  onUserForm: (data: { name: string; date: string; location: string }) => void;
};

export default function UserForm({ onUserForm }: UserFormProps) {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !date || !location) return;

    onUserForm({ name, date, location });

    setName('');
    setDate('');
    setLocation('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Namn'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type='date'
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type='text'
        placeholder='Plats'
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button type='submit'>Lägg till</button>
    </form>
  );
}
