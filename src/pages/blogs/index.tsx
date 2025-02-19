import { useEffect, useState } from "react";


interface BlogDetails {
  id: number;
  title: string;
  description: string;
  year: number;
  slug: string;
  issue_numer: number;
  image: string;
}

import styles from "./blog.module.css";
import { useRouter } from "next/navigation";
const BlogListingPage = () => {
  const router = useRouter();

  const handleBlogClick = (slug : string) => {
    router.push(`/blogs/${slug}`);
  };

  const [blogList, setBlogList] = useState<BlogDetails[]>([]);

  const fetchBlogList = async () => {
    const response = await fetch("/api/all-blogs");
    const data = await response.json();
    setBlogList(data);
  };

  useEffect(() => {
    fetchBlogList();
  }, []);

  if(!blogList.length){
    return  <div className={styles.skeletonContainer}>
      {Array.from({ length: 5 }).map((_, index) => (
       <div key={index} className={styles.skeletonCard}>
        <div className={styles.skeletonImage}></div>
        <div className={styles.skeletonTitle}></div>
        <div className={styles.skeletonYear}></div>
        <div className={styles.skeletonDescription}></div>
      </div>
      ))}
    </div>
  }
  return (
    <div className={styles.blogListContainer}>
      {blogList.map((blog) => (
        <div
          key={blog.id}
          className={styles.blogItem}
          onClick={() => handleBlogClick(blog.slug)}
        >
          <img src={`/banner/${blog.image}`} alt={blog.title} className={styles.blogImage} />
          <h2 className={styles.blogTitle}>{blog.title}</h2>
          <p className={styles.blogYear}>{blog.year}</p>
          <p className={styles.blogDescription}>{blog.description}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogListingPage;
