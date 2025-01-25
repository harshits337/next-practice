import { NextApiRequest, NextApiResponse } from 'next';

import comics from '../../data/comics.json';

interface Comics {
    id : number;
    title : string;
    description : string;
    year : number,
    slug : string,
    issue_numer :  number
}
const comicsData : Comics[]= JSON.parse(JSON.stringify(comics));


export default function handler(req: NextApiRequest, res: NextApiResponse) {

   const slug : string = req.query?.slug ? req.query.slug.toString() : '';
   console.log("slug",slug);

    const blogDetails = comicsData.find((blog) => blog.slug === slug);
    return res.status(200).json(blogDetails);


}