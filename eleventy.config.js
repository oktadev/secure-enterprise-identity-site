import { HtmlBasePlugin } from '@11ty/eleventy'
import EleventyVitePlugin from "@11ty/eleventy-plugin-vite";
import tailwindcss from "@tailwindcss/vite";

import shortcodes from './utils/shortcodes.js'

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    './public/': '/'
  });

  eleventyConfig.addPassthroughCopy({
    "style.out.css": "style.css",
  });

  eleventyConfig.addPlugin(HtmlBasePlugin);

  eleventyConfig.addPlugin(EleventyVitePlugin, {
    viteOptions: {
      plugins: [tailwindcss()],
    },
  });

  eleventyConfig.addPlugin(shortcodes);
  eleventyConfig.addCollection('topic', function (collectionsApi) {
    return collectionsApi
      .getFilteredByTag('integration')
      .filter((index) => index.data.order < 3)
  });

  // Per-page bundles, see https://github.com/11ty/eleventy-plugin-bundle
  // Adds the {% css %} paired shortcode
  eleventyConfig.addBundle("css");
  // Adds the {% js %} paired shortcode
  eleventyConfig.addBundle("js", {
    toFileDirectory: "dist",
  });

  return {
    dir: {
      input: 'src'
    }
  }
}
