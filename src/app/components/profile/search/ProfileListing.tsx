/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from './page.module.css';
// import { ProfileValues } from '@/interfaces/profile/profileInterfaces';
import { useSearchHook } from '@/hooks/search';
import SearchResultsSkeleton from '../../search/skeleton/results';
import { Button } from 'antd';

// Mock data based on the ProfileValues interface


const UserProfileListing: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  // const filteredUsers = mockUsers.filter(user =>
  //   `${user.firstName} ${user.lastName}`.toLowerCase().includes(searchTerm.toLowerCase())
  // );
  const {searchResults , searchProfilesWithFilters ,endData} = useSearchHook();

  console.log(searchResults);

  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const handleSearch = async ()=>{
    searchProfilesWithFilters(searchTerm);
  }

  useEffect(() => {
    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !loading) {
        console.log('Reached the bottom, load more users');

        setLoading(true);

        searchProfilesWithFilters(searchTerm).finally(() => {setLoading(false)});
      
        
      }
    });

    if (loadMoreRef.current) observerRef.current.observe(loadMoreRef.current);

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, [searchProfilesWithFilters, loading]);



  if(!searchResults.length){
    return <SearchResultsSkeleton/>
  }


  // return<SearchResultsSkeleton/>


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

      <Button type='primary' onClick={handleSearch}>Search</Button>
      <div className={styles.userGrid} 
      >
        {searchResults.map(user => (
            <div key={user.id} className={styles.userCard}>
            <img 
              src={user.profilePic || 'https://via.placeholder.com/150'} 
              alt={`${user.firstName} ${user.lastName}`} 
              className={styles.avatar} 
              onError={(e) => e.currentTarget.src = 'https://avatar.iran.liara.run/public/boy'}
            />
            <div className={styles.userInfo}>
              <h3>{`${user.firstName} ${user.lastName}`}</h3>
              <p>{user.currentRole}</p>
              <p>{user.currentCompany}</p>
              <div className={styles.connect}>Connect</div>
            </div>
            </div>
        ))}
                {!loading && !endData && <div ref={loadMoreRef} className={styles.loadMore}>Load More</div>}
      </div>

    </div>
  );
};

export default UserProfileListing;