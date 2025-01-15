import React from 'react';
import UserProfile from '@/components/UserProfile';

async function getUserData() {

  return {
    name: 'Víctor Sánchez',
    email: 'sanchezlealvictor@gmail.com',
    age: 35,
  };
}

export default async function ProfilePage () {

  const user = await getUserData();

  return (
    <div>
      <h1>Perfil de Usuario</h1>
      <UserProfile {...user} />
    </div>
  );
}
