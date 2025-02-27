import { HtmlBasePlugin } from '@11ty/eleventy';

export default async function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    "./public/": "/"
  });

  eleventyConfig.addCollection("integrations", (collectionsApi) => {
    return collectionsApi.getAll().sort((a,b) => a.data.order > b.data.order)
  });

  eleventyConfig.addPlugin(HtmlBasePlugin);
};

export const config = {
  dir: {
    input: "src"
  }
};
