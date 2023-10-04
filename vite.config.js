import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
    base: "/{REPO}/",
    plugins: [vue()],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
            "lipsum-zh": fileURLToPath(
                new URL("./src/assets/index.esm.js", import.meta.url)
            ),
        },
    },
    optimizeDeps: {
        exclude: ["lorem-ipsum-tc"],
    },
});
