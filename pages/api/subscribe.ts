import MailerLite from '@mailerlite/mailerlite-nodejs';
import type { NextApiRequest, NextApiResponse } from "next";

const mailerlite = new MailerLite({
    api_key: "API_KEY"
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') return res.status(400).json({ error: "Invalid method" });

    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ error: 'El email es requerido' });
    }

    try {
        await mailerlite.subscribers.createOrUpdate({ email });
        return res.status(201).json({ error: '' });
    } catch (error) {
        return res.status(500).json({ error: error.message || error.toString() });
    }
};