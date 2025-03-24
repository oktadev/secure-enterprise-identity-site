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

  eleventyConfig.addNunjucksShortcode("linkButton", function(url, text) {
    return `<a href="${url}" class="border rounded-sm w-32 p-2 text-center hover:border-sii-med-dark-blue  hover:text-sii-med-dark-blue active:border-sii-cool-dark-blue active:text-sii-cool-dark-blue ">
              ${text}
            </a>`;
  });

  eleventyConfig.addNunjucksShortcode("linkInline", function(url, text) {
    return `<a href="${url}">${text}</a>`;
  });
};

export const config = {
  dir: {
    input: "src"
  }
};
