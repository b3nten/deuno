import { assertEquals } from "https://deno.land/std@0.202.0/assert/mod.ts";
import deuno from "../mod.ts";

const css = await deuno.build({
	outfile: "./test.css",
})

Deno.writeTextFileSync("./test.css", css)