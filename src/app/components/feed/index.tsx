'use client'
import React from 'react';

import styles from './feed.module.css';
import Post from './post';
import PostCreation from './post-creation';



const Feed: React.FC = () => {

    const handlePost = (text: string, image: File | null) => {
        console.log('New Post:', { text, image });
      };

  const handleLike = (id: string) => {
    console.log(`Post ${id} liked!`);
  };

  return (
    <div className={styles.feed}>

<div>
      <h1>Create a New Post</h1>
      <PostCreation onPost={handlePost} />
    </div>
        <Post
        id="1"
        userAvatar="https://avatar.iran.liara.run/public/30" // User avatar URL
        userName="John Doe"
        userRole="Software Engineer"
        userCompany="Tech Corp"
        postedTime="2 hours ago"
        text="This is a sample post with some text and an image."
        imageUrl="https://avatar.iran.liara.run/public/30"
        likes={10}
        onLike={handleLike}
      />
      <Post
        id="2"
        userAvatar="https://avatar.iran.liara.run/public/30" // User avatar URL
        userName="Jane Smith"
        userRole="Product Manager"
        userCompany="Innovate Inc"
        imageUrl="https://avatar.iran.liara.run/public/30"
        postedTime="5 hours ago"
        text="Another post without an image."
        likes={5}
        onLike={handleLike}
      />
       <Post
        id="2"
        userAvatar="https://avatar.iran.liara.run/public/30" // User avatar URL
        userName="Jane Smith"
        userRole="Product Manager"
        userCompany="Innovate Inc"
        imageUrl="https://avatar.iran.liara.run/public/30"
        postedTime="5 hours ago"
        text="Another post without an image."
        likes={5}
        onLike={handleLike}
      />
       <Post
        id="2"
        userAvatar="https://avatar.iran.liara.run/public/30" // User avatar URL
        userName="Jane Smith"
        userRole="Product Manager"
        userCompany="Innovate Inc"
        imageUrl="https://avatar.iran.liara.run/public/30"
        postedTime="5 hours ago"
        text="Another post without an image."
        likes={5}
        onLike={handleLike}
      />
       <Post
        id="2"
        userAvatar="https://avatar.iran.liara.run/public/30" // User avatar URL
        userName="Jane Smith"
        userRole="Product Manager"
        userCompany="Innovate Inc"
        imageUrl="https://avatar.iran.liara.run/public/30"
        postedTime="5 hours ago"
        text="Another post without an image."
        likes={5}
        onLike={handleLike}
      />
       <Post
        id="2"
        userAvatar="https://avatar.iran.liara.run/public/30" // User avatar URL
        userName="Jane Smith"
        userRole="Product Manager"
        userCompany="Innovate Inc"
        imageUrl="https://avatar.iran.liara.run/public/30"
        postedTime="5 hours ago"
        text="Another post without an image."
        likes={5}
        onLike={handleLike}
      />
       <Post
        id="2"
        userAvatar="https://avatar.iran.liara.run/public/30" // User avatar URL
        userName="Jane Smith"
        userRole="Product Manager"
        userCompany="Innovate Inc"
        imageUrl="https://avatar.iran.liara.run/public/30"
        postedTime="5 hours ago"
        text="Another post without an image."
        likes={5}
        onLike={handleLike}
      />
       <Post
        id="2"
        userAvatar="https://avatar.iran.liara.run/public/30" // User avatar URL
        userName="Jane Smith"
        userRole="Product Manager"
        userCompany="Innovate Inc"
        imageUrl="https://avatar.iran.liara.run/public/30"
        postedTime="5 hours ago"
        text="Another post without an image."
        likes={5}
        onLike={handleLike}
      />
       <Post
        id="2"
        userAvatar="https://avatar.iran.liara.run/public/30" // User avatar URL
        userName="Jane Smith"
        userRole="Product Manager"
        userCompany="Innovate Inc"
        imageUrl="https://avatar.iran.liara.run/public/30"
        postedTime="5 hours ago"
        text="Another post without an image."
        likes={5}
        onLike={handleLike}
      />
       <Post
        id="2"
        userAvatar="https://avatar.iran.liara.run/public/30" // User avatar URL
        userName="Jane Smith"
        userRole="Product Manager"
        userCompany="Innovate Inc"
        imageUrl="https://avatar.iran.liara.run/public/30"
        postedTime="5 hours ago"
        text="Another post without an image."
        likes={5}
        onLike={handleLike}
      />
    </div>
  );
};

export default Feed;