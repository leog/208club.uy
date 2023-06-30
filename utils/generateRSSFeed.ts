import fs from 'fs';
import { getAllPosts } from 'lib/sanity.client';
import { urlForImage } from 'lib/sanity.image';
import RSS from 'rss';

export default async function generateRssFeed() {
    const site_url = process.env.NODE_ENV === "production" ? "https://208club.uy" : 'http://localhost:3000';

    const allPosts = await getAllPosts();

    const feedOptions = {
        title: '208Club.uy',
        description: 'Comunidad de propietarios de Peugeot 208 de Uruguay',
        site_url: site_url,
        feed_url: `${site_url}/rss.xml`,
        image_url: `${site_url}/logo.png`,
        pubDate: new Date(),
        language: "es-UY",
        copyright: `Peugeot 208 Club Uruguay ${new Date().getFullYear()}`,
        custom_namespaces: {
            wpse: "http://example.tld"
        }
    };

    const feed = new RSS(feedOptions);

    allPosts.map((post) => {
        const coverImage = post.coverImage ? `<p>
            <img style="
                margin-bottom: 15px; 
                border-top-right-radius: 1.5rem; 
                border-bottom-left-radius: 1.5rem;" src="${urlForImage(post.coverImage).url()}" />
        </p>` : "";
        feed.item({
            title: post.title,
            description: `${coverImage}<p>${post.excerpt ?? ""}</p>`,
            url: `${site_url}/posts/${post.slug}`,
            date: post.date,
            author: post.author.name,
            categories: post.categories.map((cat) => cat.name),
            custom_elements: [
                {
                    "wpse:author_avatar": [
                        urlForImage(post.author.picture).url()
                    ]
                }
            ]
        });
    });

    fs.writeFileSync('./public/rss.xml', feed.xml({ indent: true }));
}