import { HtmlBasePlugin } from "@11ty/eleventy";
import svgSprite from "eleventy-plugin-svg-sprite";

export default async function (eleventyConfig) {
  eleventyConfig.addNunjucksShortcode("linkButton", function (url, text) {
    return `<a href="${url}" class="border border-sii-border text-sii-light-header dark:text-sii-dark-header rounded-sm w-16 p-0.75 text-center hover:border-sii-primary  hover:text-sii-primary active:border-sii-primary active:text-sii-primary">
              ${text}
            </a>`;
  });

  eleventyConfig.addNunjucksShortcode("linkInline", function (url, text) {
    return `<a href="${url}">${text}</a>`;
  });

  eleventyConfig.addCollection("topic", function (collectionsApi) {
		return collectionsApi.getFilteredByTag("integration").filter(index => index.data.order < 3);
  });

  eleventyConfig.addPassthroughCopy({
    "./public/": "/",
  });

  eleventyConfig.addPlugin(HtmlBasePlugin);
  eleventyConfig.addPlugin(svgSprite, {
    path: "./public/img",
  });
}

export const config = {
  dir: {
    input: "src",
  },
};
