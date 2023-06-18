var worker = {
    fetch: async function (request, env, ctx) {
        const url = new URL(request.url);
        const searchParams = new URLSearchParams(url.searchParams);
        switch (request.method) {
            case 'POST':
                let newlist = [];
                for (const searchParam of searchParams) {
                    const value = await env.KV_FROM_FIRDAUS.get(searchParam[0]);
                    if (value === null) {
                        await env.KV_FROM_FIRDAUS.put(searchParam[0], searchParam[1]);
                        newlist.push({
                            name: searchParam[0],
                            value: searchParam[1]
                        });
                    }
                }
                return new Response(JSON.stringify(newlist[0]), {
                    status: 201
                });
            case 'GET':
                let response = {};
                const splitData = url.pathname.split("/");
                const key = splitData[splitData.length - 1];
                const value = await env.KV_FROM_FIRDAUS.get(key);
                if (value !== null) {
                    response = {
                        key,
                        value
                    };
                    return new Response(JSON.stringify(response));
                }
                response = {
                    error: `Cannot found the data for ${key}, API_TOKEN=${env.API_TOKEN}, SECRET_KEY=${env.SECRET_KEY}`
                };
                return new Response(JSON.stringify(response), {
                    status: 403
                });
        }
        const response = {
            error: `Method ${request.method} not supported, API_TOKEN=${env.API_TOKEN}, SECRET_KEY=${env.SECRET_KEY}`
        };
        return new Response(JSON.stringify(response));
    },
};

export { worker as default };
//# sourceMappingURL=worker.mjs.map
