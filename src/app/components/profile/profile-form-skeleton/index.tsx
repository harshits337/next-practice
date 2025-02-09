import React from 'react';
import styles from './profile.module.css';

const ProfileFormSkeleton = () => {
  return (
    <div className={styles.profileForm}>
      <div className={styles.row}>
        <div className={styles.col}>
          <div className={styles.skeletonInput}></div>
        </div>
        <div className={styles.col}>
          <div className={styles.skeletonInput}></div>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <div className={styles.skeletonInput}></div>
        </div>
        <div className={styles.col}>
          <div className={styles.skeletonInput}></div>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <div className={styles.skeletonSelect}></div>
        </div>
        <div className={styles.col}>
          <div className={styles.skeletonInput}></div>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <div className={styles.skeletonInput}></div>
        </div>
        <div className={styles.col}>
          <div className={styles.skeletonInput}></div>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <div className={styles.skeletonInput}></div>
        </div>
        <div className={styles.col}>
          <div className={styles.skeletonInput}></div>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <div className={styles.skeletonTextArea}></div>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <div className={styles.skeletonInput}></div>
        </div>
        <div className={styles.col}>
          <div className={styles.skeletonInput}></div>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <div className={styles.skeletonInput}></div>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <div className={styles.skeletonButton}></div>
        </div>
      </div>
    </div>
  );
};

export default ProfileFormSkeleton;