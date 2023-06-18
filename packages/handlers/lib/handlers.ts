import Store, { Post } from './posts_store';
import * as jose from 'jose'

export async function json({}:any): Promise<Response> {
  const err = jose.errors;
  const posts = new Store();
  const body = JSON.stringify(await posts.all());
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-type': 'application/json',
  };
  return new Response(body, { headers });
}