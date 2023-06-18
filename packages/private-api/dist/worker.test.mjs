import { describe, test, expect } from '@jest/globals';
import worker from './worker.mjs';

describe('sum module', () => {
    test('adds 1 + 2 to equal 3', async () => {
        const req = new Request("http://localhost/abc=3");
        getMiniflareBindings();
        const ctx = new ExecutionContext();
        var response = await worker.fetch(req, getMiniflareBindings(), ctx);
        expect(await response.text()).toBe("set http://localhost/abc=3 with [], API_TOKEN=example_dev_token, SECRET_KEY=firdaus secret");
        // expect(await env.KV_FROM_FIRDAUS.get("abc")).toBe("ff");
    });
});
//# sourceMappingURL=worker.test.mjs.map
