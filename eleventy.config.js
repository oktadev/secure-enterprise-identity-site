import { HtmlBasePlugin } from '@11ty/eleventy';

export default async function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    "./public/": "/"
  });

  eleventyConfig.addPlugin(HtmlBasePlugin);
};

export const config = {
  dir: {
    input: "src"
  }
};
