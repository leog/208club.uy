import fs from 'fs';
import { getAllPosts } from 'lib/sanity.client';
import RSS from 'rss';

export default async function generateRssFeed() {
    const site_url = process.env.NODE_ENV === "production" ? "208club.uy" : 'localhost:3000';

    const allPosts = await getAllPosts();

    const feedOptions = {
        title: '208Club.uy',
        description: 'Comunidad de propietarios de Peugeot 208 de Uruguay',
        site_url: site_url,
        feed_url: `${site_url}/rss.xml`,
        image_url: `${site_url}/logo.png`,
        pubDate: new Date(),
        copyright: `&copy; Peugeot 208 Club Uruguay ${new Date().getFullYear()}`,
    };

    const feed = new RSS(feedOptions);

    allPosts.map((post) => {
        feed.item({
            title: post.title,
            description: post.excerpt,
            url: `${site_url}/posts/${post.slug}`,
            date: post.date,
            author: post.author.name,
            categories: post.categories.map((cat) => cat.name),
        });
    });

    fs.writeFileSync('./public/rss.xml', feed.xml({ indent: true }));
}