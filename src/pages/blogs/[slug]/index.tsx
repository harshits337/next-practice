import { useEffect, useState } from "react";

interface BlogDetails {
    id : number;
    title : string;
    description : string;
    year : number,
    slug : string,
    issue_numer :  number

}

import styles from './BlogDetails.module.css';


const BlogsPage = () => {

    const [blogDetails, setBlogDetails] = useState<BlogDetails>({} as BlogDetails);
    const fetchBlogDetails = async () => {
        const response = await fetch('/api/blogs?slug=first-blog');
        const data = await response.json();
        setBlogDetails(data);
    } 

    useEffect(()=>{
        fetchBlogDetails(); 
    },[]);

    console.log(blogDetails);

    return (
        <div className={styles.blogContainer}>
        <h1 className={styles.title}>{blogDetails.title}</h1>
        <p className={styles.year}>{blogDetails.year}</p>
        <p className={styles.slug}>{blogDetails.slug}</p>
        <p className={styles.description}>{blogDetails.description}</p>
         <p className={styles.description}>{blogDetails.description}</p>
        <p className={styles.description}>{blogDetails.description}</p>
        <p className={styles.description}>{blogDetails.description}</p>
        <p className={styles.description}>{blogDetails.description}</p>
        <p className={styles.description}>{blogDetails.description}</p>
        <p className={styles.description}>{blogDetails.description}</p>
        <p className={styles.description}>{blogDetails.description}</p>
        <p className={styles.description}>{blogDetails.description}</p>
        <p className={styles.description}>{blogDetails.description}</p>
        <p className={styles.description}>{blogDetails.description}</p>
        <p className={styles.description}>{blogDetails.description}</p>
        <p className={styles.description}>{blogDetails.description}</p>
        <p className={styles.description}>{blogDetails.description}</p>
        <p className={styles.description}>{blogDetails.description}</p>
        <p className={styles.description}>{blogDetails.description}</p>
        
      </div>
    )
}


export default BlogsPage;