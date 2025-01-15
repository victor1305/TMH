import Image from 'next/image';
import React from 'react';

import { User } from '@/lib/types';

const UserProfile: React.FC<User> = ({ name, email, avatar }) => {
  return (
    <div className='flex mt-10'>
      <Image src={avatar} alt={name} width={100} height={100} />
      <div className='ml-4'>
      <h2>{name}</h2>
      <p>{email}</p>
      </div>
    </div>
  );
};

export default UserProfile;