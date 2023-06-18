import PostsStore from './posts_store.mjs';
import 'jose';

async function json({}) {
    const posts = new PostsStore();
    const body = JSON.stringify(await posts.all());
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'application/json',
    };
    return new Response(body, { headers });
}

export { json };
//# sourceMappingURL=handlers.mjs.map
