<div align="center">
<br />

![Deuno](.github/banner.png)

<h3>Deuno 🦕</h3>

#### Deno and UnoCSS <3

[![Npm package yearly downloads](https://badgen.net/npm/dy/express)](https://npmjs.com/package/express)
[![GitHub stars](https://img.shields.io/github/stars/freeCodeCamp/freeCodeCamp.svg?style=social&label=Star&maxAge=2592000)](https://github.com/freeCodeCamp/freeCodeCamp)
[![NuGet stable version](https://badgen.net/nuget/v/newtonsoft.json)](https://nuget.org/packages/newtonsoft.json)

*Deuno is a tiny zero-configuration library for running unocss inside deno.*
</div>

### Usage

``` typescript
import uno from "https://deno.land/x/deuno/mod.ts"

const css = await uno.build() // returns css as string.
```

By default, Deuno uses `presetWind` and the `tailwind` style reset.

### Configuration options
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