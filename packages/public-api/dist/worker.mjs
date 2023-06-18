var worker = {
    async fetch(request, env, ctx) {
        return await env.DESTINATION_API.fetch(request.clone());
    },
};

export { worker as default };
//# sourceMappingURL=worker.mjs.map
