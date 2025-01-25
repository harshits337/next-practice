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
   
    const start: number = req.query.start ? Number(req.query.start) : 0;
    return res.status(200).json(comicsData?.slice(start, start + 10));
}