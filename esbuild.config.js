import esbuild from 'esbuild'
import { nodeExternalsPlugin } from "esbuild-node-externals";

esbuild
  .build({
    entryPoints: ["./src/index.ts"],
    outfile: "dist/index.js",
    bundle: true,
    minify: true,
    platform: "node",
    sourcemap: true,
    format: 'esm',
    target: ['esnext'],
    plugins: [nodeExternalsPlugin()],
  })
  .catch((process) => process.exit(1));
