import {Env} from "../bindings";
import {GetDataResponse} from "private-api-worker/src/Data";
export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {

		if(request.method === 'GET'){

			const url = new URL(request.url);
			const init:RequestInit = {
				headers: {
					"content-type": "application/json",
				},
				method: "GET"
			};

			const newRequestInit = {
				// Change method
				method: "GET",
				// Change body
				// body: JSON.stringify({ bar: "foo" }),
				// Change the redirect mode.
				// redirect: "follow",
				// Change headers, note this method will erase existing headers
				headers: {
					"Content-Type": "application/json",
				},
				// Change a Cloudflare feature on the outbound response
				cf: { apps: false },
			};
			const nameKey = url.searchParams.get("name");
			const newRequest = new Request(
				new URL(url.searchParams.get("name")!, "http://test.destination.local"),
				newRequestInit
			);
			if(nameKey !== null){
				// const response = await env.PRIVATE_API.fetch(newRequest);
				// const response = await env.PRIVATE_API.fetch(`/data/${url.searchParams.get("name")}`, init);
				const response = await env.PRIVATE_API.fetch(newRequest);
				const data = await response.json<GetDataResponse>();
				return new Response(JSON.stringify(data));
			}
			return new Response(JSON.stringify({
				error: "please provide name"
			}));
		}
		else{
			return new Response(JSON.stringify({
				error: `${request.method} is not supported`
			}));
		}

	},
};
