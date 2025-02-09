import React from 'react';
import styles from './page.module.css';
import { Button } from 'antd';
import { useRouter } from 'next/navigation';

interface ProfileValues {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  dob: string;
  currentCompany: string;
  currentRole: string;
  totalExperience: string;
  title: string;
  about: string;
  username: string;
  skills: string[];
  profilePic: string;
  country: string;
  phoneNumber: string;
}

interface ProfileViewProps {
  profile?: ProfileValues;
}

const ProfileView: React.FC<ProfileViewProps> = ({ profile }) => {
  const router = useRouter();
  if (!profile) {
    return (
      <div className={`${styles.profileView} ${styles.skeleton}`}>
      <div className={styles.profileHeader}>
        <div className={styles.skeletonTitle}></div>
        <div className={styles.skeletonText}></div>
      </div>
      <div className={styles.profilePicContainer}>
        <div className={styles.ssadsadsadasdasdasdkeletonProfilePic}></div>
      </div>
      <div className={styles.profileInfo}>
        <h3>Personal Information</h3>
        <div className={styles.row}>
        <div className={styles.col}>
          <div className={styles.skeletonText}></div>
        </div>
        <div className={styles.col}>
          <div className={styles.skeletonText}></div>
        </div>
        </div>
        <div className={styles.row}>
        <div className={styles.col}>
          <div className={styles.skeletonText}></div>
        </div>
        <div className={styles.col}>
          <div className={styles.skeletonText}></div>
        </div>
        </div>
        <div className={styles.row}>
        <div className={styles.col}>
          <div className={styles.skeletonText}></div>
        </div>
        <div className={styles.col}>
          <div className={styles.skeletonText}></div>
        </div>
        </div>
        <div className={styles.row}>
        <div className={styles.col}>
          <div className={styles.skeletonText}></div>
        </div>
        </div>
        
        <h3>Professional Information</h3>
        <div className={styles.row}>
        <div className={styles.col}>
          <div className={styles.skeletonText}></div>
        </div>
        <div className={styles.col}>
          <div className={styles.skeletonText}></div>
        </div>
        </div>
        <div className={styles.row}>
        <div className={styles.col}>
          <div className={styles.skeletonText}></div>
        </div>
        <div className={styles.col}>
          <div className={styles.skeletonText}></div>
        </div>
        </div>
      </div>
      </div>
    );
  }

  return (
    <div className={styles.profileView}>
      <div className={styles.profileHeader}>
        <h2>{profile.title}</h2>
        <p>{profile.about}</p>
      </div>
      <div className={styles.profilePicContainer}>
        <img src={profile.profilePic} alt="Profile Picture" className={styles.profilePic} />
      </div>
      <div className={styles.profileInfo}>
        <h3>Personal Information</h3>
        <div className={styles.row}>
          <div className={styles.col}>
            <p><strong>First Name:</strong> {profile.firstName}</p>
          </div>
          <div className={styles.col}>
            <p><strong>Last Name:</strong> {profile.lastName}</p>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.col}>
            <p><strong>Email:</strong> {profile.email}</p>
          </div>
          <div className={styles.col}>
            <p><strong>Gender:</strong> {profile.gender}</p>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.col}>
            <p><strong>Date of Birth:</strong> {profile.dob}</p>
          </div>
          <div className={styles.col}>
            <p><strong>Country:</strong> {profile.country}</p>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.col}>
            <p><strong>Phone Number:</strong> {profile.phoneNumber}</p>
          </div>
        </div>
        
        <h3>Professional Information</h3>
        <div className={styles.row}>
          <div className={styles.col}>
            <p><strong>Current Company:</strong> {profile.currentCompany}</p>
          </div>
          <div className={styles.col}>
            <p><strong>Current Role:</strong> {profile.currentRole}</p>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.col}>
            <p><strong>Total Experience:</strong> {profile.totalExperience} years</p>
          </div>
          <div className={styles.col}>
            <p><strong>Skills:</strong> {profile.skills}</p>
          </div>
        </div>
        <Button type="primary" onClick={() =>{
          router.push('/profile/edit')
        }}>Edit Profile</Button>
      </div>
      
    </div>
  );
};

export default ProfileView;