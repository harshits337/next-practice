// import { useEffect, useState } from "react";

interface BlogDetails {
    id : number;
    title : string;
    description : string;
    year : number,
    slug : string,
    issue_numer :  number,
    image : string

}

interface BlogDetailsProps {
    initialBlogDetails : BlogDetails
}

import Image from 'next/image';
import styles from './BlogDetails.module.css';
// import { useRouter } from "next/router";

const BlogsPage = (props : BlogDetailsProps) => {

    // const [blogDetails, setBlogDetails] = useState<BlogDetails>({} as BlogDetails);
    // const router = useRouter();
    // // console.log(router.query.slug);
    // const fetchBlogDetails = async (slug : string) => {
    //     console.log(slug);
    //     const response = await fetch(`/api/blogs?slug=${slug}`);
    //     const data = await response.json();
    //     setBlogDetails(data);
    // } 


    // useEffect(()=>{
        
    //    if(router.query.slug){
    //     fetchBlogDetails(router.query.slug.toString()); 
    //    }

    // },[router.query.slug]);

    const blogDetails  : BlogDetails= props.initialBlogDetails;

    console.log(blogDetails);

    if (!Object.keys(blogDetails).length) {
        return (
            <div className={styles.skeletonContainer}>
                <div className={styles.skeletonTitle}></div>
                <div className={styles.skeletonBanner}></div>
                <div className={styles.skeletonYear}></div>
                <div className={styles.skeletonSlug}></div>
                <div className={styles.skeletonDescription}></div>
            </div>
        );
    }

    return (
        <div className={styles.blogContainer}>
        <h1 className={styles.title}>{blogDetails.title}</h1>
        <Image src={'https://res.cloudinary.com/dwspjwpfw/image/upload/v1737891186/banner/6_hamugo.webp'} alt="banner" className={styles.banner} width={800} height={600} />
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

import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { slug } = context.params!;
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/api/blogs?slug=${slug}`);
    const data = await response.json();

    return {
        props: {
            initialBlogDetails: data,
        },
    };
};


export default BlogsPage;