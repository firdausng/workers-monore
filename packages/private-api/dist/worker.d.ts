/// <reference types="@cloudflare/workers-types" />
import { Env } from "../bindings";
declare const _default: {
    fetch: (request: Request, env: Env, ctx: ExecutionContext) => Promise<Response>;
};
export default _default;
