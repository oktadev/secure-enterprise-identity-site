import { HtmlBasePlugin } from '@11ty/eleventy'
import EleventyVitePlugin from '@11ty/eleventy-plugin-vite'
import pluginNavigation from '@11ty/eleventy-navigation';
import pluginFeatherIcons from 'eleventy-plugin-feathericons';
import tailwindcss from '@tailwindcss/vite'

import shortcodes from './utils/shortcodes.js'

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    './public/': '/'
  })

  eleventyConfig.addPassthroughCopy({
    'style.out.css': 'style.css'
  })

  eleventyConfig.addPlugin(HtmlBasePlugin);
  eleventyConfig.addPlugin(pluginNavigation);
  eleventyConfig.addPlugin(pluginFeatherIcons);

  eleventyConfig.addPlugin(EleventyVitePlugin, {
    viteOptions: {
      plugins: [tailwindcss()]
    }
  })

  // eleventyConfig.addPlugin(shortcodes);
  Object.keys(shortcodes).forEach((shortcodeName) => {
    eleventyConfig.addShortcode(shortcodeName, shortcodes[shortcodeName])
  })

  eleventyConfig.addLayoutAlias('base', 'base.njk')

  // Per-page bundles, see https://github.com/11ty/eleventy-plugin-bundle
  // Adds the {% css %} paired shortcode
  eleventyConfig.addBundle('css')
  // Adds the {% js %} paired shortcode
  eleventyConfig.addBundle('js', {
    toFileDirectory: 'dist'
  })

  return {
    passthroughFileCopy: true,
    dir: {
      input: 'src',
      output: '_site',
      layouts: 'layouts',
      includes: '_includes',
      data: '_data'
    }
  }
}
