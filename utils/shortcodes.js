export default function(eleventyConfig) {
  eleventyConfig.addNunjucksShortcode("linkButton", function (url, text) {
    return `<a href="${url}" class="border border-sii-border text-sii-light-header dark:text-sii-dark-header rounded-sm w-16 p-0.75 text-center hover:border-sii-primary  hover:text-sii-primary active:border-sii-primary active:text-sii-primary">
              ${text}
            </a>`;
  });

  eleventyConfig.addNunjucksShortcode("linkInline", function (url, text) {
    return `<a href="${url}">${text}</a>`;
  });
}
