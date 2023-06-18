import { Env } from '../bindings';


export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		return await env.DESTINATION_API.fetch(request.clone());
	},
};
