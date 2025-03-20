import { HtmlBasePlugin } from '@11ty/eleventy';
import svgSprite from 'eleventy-plugin-svg-sprite';

export default async function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    "./public/": "/"
  });

  eleventyConfig.addPlugin(HtmlBasePlugin);
  eleventyConfig.addPlugin(svgSprite, {
    path: "./public/img",
  });

  eleventyConfig.addShortcode("linkButton", function(url, text) {
    return `<a href={${url}} class="border rounded-sm w-32 p-2 text-center">
              ${text}
            </a>`;
  });
};

export const config = {
  dir: {
    input: "src"
  }
};
