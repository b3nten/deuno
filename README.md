![deuno loves unocss](/.github/banner.png)

# Deuno

Deuno is a tiny zero-configuration library for running unocss inside deno.

## Usage

``` typescript
import uno from "https://deno.land/x/deuno/mod.ts"

const css = await uno.build() // returns css as string.
```

By default, Deuno uses `presetWind` and the `tailwind` style reset.

## Configuration options
```typescript
import uno from "https://deno.land/x/deuno/mod.ts"

const css = uno.build({
	dir: "./src", // the directory to parse
	outfile: "./dist/index.css", // path to outfile
	resets: [uno.resets.tailwindCompat], // string array of style resets (or other arbitrary css)
	extensions: [".tsx", ".mdx"], // string of file types to parse
	skip: [^(?!.*\/debug\/)src\/.*component\.ts$], // regex array to filter paths
	log: false, // log to console?
	...unoConfig // the rest of your unocss config
})
```