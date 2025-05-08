import { HtmlBasePlugin } from '@11ty/eleventy'

import shortcodes from './utils/shortcodes.js'

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    './public/': '/'
  })

  eleventyConfig.addPlugin(HtmlBasePlugin);

  eleventyConfig.addPlugin(shortcodes)
  eleventyConfig.addCollection('topic', function (collectionsApi) {
    return collectionsApi
      .getFilteredByTag('integration')
      .filter((index) => index.data.order < 3)
  })

  return {
    dir: {
      input: 'src'
    }
  }
}
