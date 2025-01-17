import { useState } from 'react';
import UserForm from './components/UserForm';
import Header from './components/Header';

function App() {
  const [userData, setUserData] = useState<{
    name: string;
    date: string;
    location: string;
  } | null>(null);

  const handleUserForm = (data: {
    name: string;
    date: string;
    location: string;
  }) => {
    setUserData(data);
  };

  return (
    <div>
      <Header />

      <h1>Registrera användare</h1>

      <UserForm onUserForm={handleUserForm} />

      {userData && (
        <div>
          <h2>Inlämnad data:</h2>
          <p>Namn: {userData.name}</p>
          <p>Datum: {userData.date}</p>
          <p>Plats: {userData.location}</p>
        </div>
      )}
    </div>
  );
}

export default App;
