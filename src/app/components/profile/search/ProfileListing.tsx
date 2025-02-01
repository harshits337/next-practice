'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import { ProfileValues } from '@/interfaces/profile/profileInterfaces';

// Mock data based on the ProfileValues interface
const mockUsers: ProfileValues[] = [
  {
    id: '1',
    firstName: 'pack',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    gender: 'Male',
    dob: '1990-01-01',
    currentCompany: 'Tech Corp',
    currentRole: 'Software Engineer',
    totalExperience: '5 years',
    title: 'Senior Developer',
    about: 'Experienced software developer...',
    username: 'johndoe',
    skills: ['JavaScript', 'React', 'Node.js'],
    profilePic: 'https://avatar.iran.liara.run/public/boy',
    country: 'USA',
    phoneNumber: '+1234567890',
  },
  {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    gender: 'Male',
    dob: '1990-01-01',
    currentCompany: 'Tech Corp',
    currentRole: 'Software Engineer',
    totalExperience: '5 years',
    title: 'Senior Developer',
    about: 'Experienced software developer...',
    username: 'johndoe',
    skills: ['JavaScript', 'React', 'Node.js'],
    profilePic: 'https://avatar.iran.liara.run/public/boy',
    country: 'USA',
    phoneNumber: '+1234567890',
  },
  {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    gender: 'Male',
    dob: '1990-01-01',
    currentCompany: 'Tech Corp',
    currentRole: 'Software Engineer',
    totalExperience: '5 years',
    title: 'Senior Developer',
    about: 'Experienced software developer...',
    username: 'johndoe',
    skills: ['JavaScript', 'React', 'Node.js'],
    profilePic: 'https://avatar.iran.liara.run/public/boy',
    country: 'USA',
    phoneNumber: '+1234567890',
  },
  {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    gender: 'Male',
    dob: '1990-01-01',
    currentCompany: 'Tech Corp',
    currentRole: 'Software Engineer',
    totalExperience: '5 years',
    title: 'Senior Developer',
    about: 'Experienced software developer...',
    username: 'johndoe',
    skills: ['JavaScript', 'React', 'Node.js'],
    profilePic: 'https://avatar.iran.liara.run/public/boy',
    country: 'USA',
    phoneNumber: '+1234567890',
  },
  {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    gender: 'Male',
    dob: '1990-01-01',
    currentCompany: 'Tech Corp',
    currentRole: 'Software Engineer',
    totalExperience: '5 years',
    title: 'Senior Developer',
    about: 'Experienced software developer...',
    username: 'johndoe',
    skills: ['JavaScript', 'React', 'Node.js'],
    profilePic: 'https://avatar.iran.liara.run/public/boy',
    country: 'USA',
    phoneNumber: '+1234567890',
  },
  {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    gender: 'Male',
    dob: '1990-01-01',
    currentCompany: 'Tech Corp',
    currentRole: 'Software Engineer',
    totalExperience: '5 years',
    title: 'Senior Developer',
    about: 'Experienced software developer...',
    username: 'johndoe',
    skills: ['JavaScript', 'React', 'Node.js'],
    profilePic: 'https://avatar.iran.liara.run/public/boy',
    country: 'USA',
    phoneNumber: '+1234567890',
  }
  // Add more mock users as needed
];

const UserProfileListing: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = mockUsers.filter(user =>
    `${user.firstName} ${user.lastName}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className={styles.userGrid}>
        {filteredUsers.map(user => (
          <div key={user.id} className={styles.userCard}>
            <img src={user.profilePic} alt={`${user.firstName} ${user.lastName}`} className={styles.avatar} />
            <div className={styles.userInfo}>
              <h3>{`${user.firstName} ${user.lastName}`}</h3>
             
             
              <p>{user.currentRole}</p>
              <p>{user.currentCompany}</p>
              <div className={styles.connect}>Connect</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProfileListing;