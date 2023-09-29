import {
  presetAttributify,
  presetIcons,
  presetMini,
  presetTagify,
  presetTypography,
  presetUno,
  presetWebFonts,
  presetWind,
  UnoGenerator,
  type UserConfig,
} from "https://esm.sh/unocss@0.56.4";
import { walk } from "https://deno.land/std/fs/mod.ts";
import aLog from "aLog";

const log = new aLog("DEUNO");

export const resets = {
  tailwind:
    `a,hr{color:inherit}progress,sub,sup{vertical-align:baseline}blockquote,body,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,menu,ol,p,pre,ul{margin:0}fieldset,legend,menu,ol,ul{padding:0}*,::after,::before{box-sizing:border-box;border-width:0;border-style:solid;border-color:var(--un-default-border-color,#e5e7eb)}html{line-height:1.5;-webkit-text-size-adjust:100%;text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"}body{line-height:inherit}hr{height:0;border-top-width:1px}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}menu,ol,ul{list-style:none}textarea{resize:vertical}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}`,
  tailwindCompat:
    `a,hr{color:inherit}progress,sub,sup{vertical-align:baseline}blockquote,body,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,menu,ol,p,pre,ul{margin:0}fieldset,legend,menu,ol,ul{padding:0}*,::after,::before{box-sizing:border-box;border-width:0;border-style:solid;border-color:var(--un-default-border-color,#e5e7eb)}html{line-height:1.5;-webkit-text-size-adjust:100%;text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"}body{line-height:inherit}hr{height:0;border-top-width:1px}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}menu,ol,ul{list-style:none}textarea{resize:vertical}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}`,
  ericMeyer:
    `a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:'';content:none}table{border-collapse:collapse;border-spacing:0}`,
};
export const presets = {
  presetWind,
  presetAttributify,
  presetIcons,
  presetMini,
  presetTagify,
  presetTypography,
  presetUno,
  presetWebFonts,
};

export type UnoConfig = UserConfig & {
  dir?: string;
  extensions?: string[];
  skip?: RegExp[];
  log?: boolean;
  resets?: string[];
  outfile?: string;
};

/**
 * Generates a CSS stylesheet using unocss.
 * 
 * @param {UnoConfig} config - Configuration object.
 * @param {string} [config.dir="."] - The directory to scan files in.
 * @param {string[]} [config.extensions=[".ts", ".tsx", ".js", ".jsx", ".html"]] - A string array of file extensions to include.
 * @param {RegExp[]} [config.skip=[]] - An array of RegExp instances; files matching any of these will be filtered out.
 * @param {boolean} [config.log=false] - Whether to log the processing steps to the console.
 * @param {string[]} [config.resets=[]] - A string array containing style resets.
 * @param {string} [config.outfile=""] - The path to the output file. If blank, no file will be created.
 * @returns {string} - A generated string based on the specified configuration.
 */
export async function build(
  config: UnoConfig = {},
): Promise<string> {
  const defaultConfig = {
    dir: ".",
    extensions: [".html", ".ts", ".tsx", ".js", ".jsx"],
    skip: [],
    log: true,
    resets: [resets.tailwind],
    presets: [presetWind()],
  };
  const mergedConfig = Object.assign(defaultConfig, config);
  try {
    const t = performance.now();
    const uno = new UnoGenerator(mergedConfig as UserConfig);
    const iter = walk(mergedConfig.dir, {
      includeDirs: false,
      exts: mergedConfig.extensions,
      skip: mergedConfig.skip,
    });
    const files: string[] = [];
    for await (const entry of iter) {
      if (entry.isFile) {
        const content = await Deno.readTextFile(entry.path);
        files.push(content);
      }
    }
    const result = await uno.generate(files.join("\n"));

    if(mergedConfig.outfile){
      await Deno.writeTextFile(mergedConfig.outfile, result.css);
    }

    mergedConfig.log &&
      log.success(
        `compiled ${files.length} files in ${
          (performance.now() - t).toFixed(2)
        }ms`,
      );
    return mergedConfig.resets
      ? `${mergedConfig.resets.join(" ")} ${result.css}`
      : result.css;
  } catch (e) {
    mergedConfig.log && log.fatal(e);
    throw e;
  }
}

export default {
  build,
  presets,
  resets,
};
