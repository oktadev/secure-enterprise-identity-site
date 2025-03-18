import { HtmlBasePlugin } from '@11ty/eleventy';

export default async function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    "./public/": "/"
  });

  eleventyConfig.addPlugin(HtmlBasePlugin);

  eleventyConfig.addNunjucksShortcode("linkButton", function(url, text) {
    return `<a href="${url}" class="border rounded-sm w-32 p-2 text-center hover:border-sii-med-dark-blue  hover:text-sii-med-dark-blue active:border-sii-cool-dark-blue active:text-sii-cool-dark-blue ">
              ${text}
            </a>`;
  });
};

export const config = {
  dir: {
    input: "src"
  }
};
