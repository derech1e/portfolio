import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
    const blog = await getCollection('blog');
    return rss({
        title: 'Thomas Nürk',
        description: 'My personal blog',
        site: context.site,
        items: blog.map((item) => ({
            title: item.data.title,
            pubDate: item.data.publishDate,
            link: `/blog/${item.slug}/`,
        })),
    });
}
