import type {Config} from 'jest'
const config: Config = {
    globals: {
        "ts-jest": {
            isolatedModules: true,
        },
    },
    verbose: true,
    moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
    moduleDirectories: ["node_modules", "src"],
    preset: "ts-jest/presets/default-esm",
    transform: {
        '^.+\\.m?[tj]sx?$': [
            'ts-jest',
            {
                useESM: true,
            },
        ],
    },
    moduleNameMapper: {
        "^jose/(.*)$": "jose/$1",
        "^@/(.*)$": "<rootDir>/src/$1",
        "^(\\.{1,2}/.*)\\.js$": "$1",
    },
    resolver: "./export_maps_resolver.cjs",
    testEnvironment: "miniflare",
    testEnvironmentOptions: {
        // Miniflare doesn't yet support the `main` field in `wrangler.toml` so we
        // need to explicitly tell it where our built worker is. We also need to
        // explicitly mark it as an ES module.
        scriptPath: "dist/handlers.mjs",
        modules: true,
    }
};

export default config;