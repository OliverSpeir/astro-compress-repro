import { defineConfig } from "astro/config";

import compress from "astro-compress";

// https://astro.build/config
// export default defineConfig({
//   integrations: [compress()]
// });
export default defineConfig({
  integrations: [
    compress({
      Path: ["./dist", "./_astro"],
    }),
  ],
});
