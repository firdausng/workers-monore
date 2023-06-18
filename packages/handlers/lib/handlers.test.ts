import {describe, expect, test} from '@jest/globals';
import {json} from "./handlers";

describe('sum module', () => {
    test('adds 1 + 2 to equal 3', () => {
        json({
            test: 'name'
        });
        expect(1 + 2).toBe(3);
    });
});



// import { expect, test } from "vitest";
// import {json} from "./handlers";
//
// test("responds with url", async () => {
//     json({
//         test: 'name'
//     });
//     const req = new Request("http://localhost/");
//     // const res = await handleRequest(req);
//     // expect(await res.text()).toBe("URL: http://localhost/ KEY: value");
// });