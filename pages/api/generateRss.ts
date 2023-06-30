import type { NextApiRequest, NextApiResponse } from "next";
import generateRssFeed from 'utils/generateRSSFeed';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') return res.status(400).json({ error: "Invalid method" });

    const { secret } = req.body;

    if (!secret) {
        return res.status(400).json({ error: 'No secret' });
    }

    if (secret !== process.env.MAILERLITE_API_KEY) {
        return res.status(400).json({ error: 'Wrong secret' });
    }

    try {
        await generateRssFeed();
    } catch (error) {
        return res.status(500).json({ error: error.message || error.toString() });
    }
};