import React, { useState } from 'react';
import styles from './post.module.css';

interface PostProps {
  id: string;
  userAvatar: string; // New prop for user avatar
  userName: string;
  userRole: string;
  userCompany: string;
  postedTime: string;
  text: string;
  imageUrl?: string;
  likes: number;
  onLike: (id: string) => void;
}

const Post: React.FC<PostProps> = ({
  id,
  userAvatar,
  userName,
  userRole,
  userCompany,
  postedTime,
  text,
  imageUrl,
  likes,
  onLike,
}) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    onLike(id);
  };

  return (
    <div className={styles.post}>
      {/* User Info Section */}
      <div className={styles.userInfo}>
        <img src={userAvatar} alt="User Avatar" className={styles.userAvatar} />
        <div className={styles.userDetails}>
          <h3 className={styles.userName}>{userName}</h3>
          <p className={styles.userRoleCompany}>
            {userRole} at {userCompany}
          </p>
        </div>
        <p className={styles.postedTime}>{postedTime}</p>
      </div>

      {/* Post Content */}
      {imageUrl && <img src={imageUrl} alt="Post" className={styles.postImage} />}
      <p className={styles.postText}>{text}</p>

      {/* Like Button */}
      <div className={styles.postActions}>
        <button onClick={handleLike} className={styles.likeButton}>
          {isLiked ? '❤️' : '🤍'} {likes}
        </button>
      </div>
    </div>
  );
};

export default Post;