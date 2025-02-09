import React from 'react';
import styles from './results.module.css';

const SearchResultsSkeleton = () => {
  return (
    <div className={styles.userGrid}>
      {Array.from({ length: 15 }).map((_, index) => (
        <div key={index} className={styles.skeletonCard}>
          <div className={styles.skeletonAvatar}></div>
          <div className={styles.skeletonText}></div>
          <div className={styles.skeletonText}></div>
          <div className={styles.skeletonText}></div>
          
        </div>
      ))}
    </div>
  );
};

export default SearchResultsSkeleton;