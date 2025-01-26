import { useEffect, useState } from "react";

interface BlogDetails {
    id : number;
    title : string;
    description : string;
    year : number,
    slug : string,
    issue_numer :  number,
    image : string

}

import styles from './BlogDetails.module.css';
import { useRouter } from "next/router";

const BlogsPage = () => {

    const [blogDetails, setBlogDetails] = useState<BlogDetails>({} as BlogDetails);
    const router = useRouter();
    // console.log(router.query.slug);
    const fetchBlogDetails = async (slug : string) => {
        console.log(slug);
        const response = await fetch(`/api/blogs?slug=${slug}`);
        const data = await response.json();
        setBlogDetails(data);
    } 


    useEffect(()=>{
        
       if(router.query.slug){
        fetchBlogDetails(router.query.slug.toString()); 
       }

    },[router.query.slug]);

    console.log(blogDetails);

    if(!Object.keys(blogDetails).length){
        return <p>Loading...</p>
    }

    return (
        <div className={styles.blogContainer}>
        <h1 className={styles.title}>{blogDetails.title}</h1>
        <img src={`/banner/${blogDetails.image}`} alt="banner" className={styles.banner}/>
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