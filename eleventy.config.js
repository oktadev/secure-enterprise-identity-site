import { HtmlBasePlugin } from '@11ty/eleventy';

export default async function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    "./public/": "/"
  });

  eleventyConfig.addPlugin(HtmlBasePlugin);

  eleventyConfig.addNunjucksShortcode("linkButton", function(url, text) {
    return `<a href="${url}" class="border rounded-sm w-32 p-2 text-center hover:border-sii-cyan-light  hover:text-sii-cyan-light ">
              ${text}
            </a>`;
  });

  eleventyConfig.addNunjucksShortcode("sectionIcon", function(fragment) {
    return `<img src="img/${fragment}.svg" /> `;
  });
};

export const config = {
  dir: {
    input: "src"
  }
};
