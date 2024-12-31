const path = require('path')
const htmlmin = require('html-minifier')
const { DateTime } = require("luxon");
const site = require('./src/_data/env');
const cdn = require('./src/_includes/components/cdn');
const cdn2 = require('./src/_includes/components/cdn2');
const params = '&output=webp';
const now = String(Date.now())
const pluginRss = require("@11ty/eleventy-plugin-rss"); // needed for absoluteUrl SEO feature
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const EleventyVitePlugin = require("@11ty/eleventy-plugin-vite");
const Image = require("@11ty/eleventy-img");
const yaml = require("js-yaml"); // Because yaml is nicer than json for editors
require('dotenv').config();

const baseUrl = process.env.BASE_URL || "http://localhost:8080";
console.log('baseUrl is set to ...', baseUrl);

const globalSiteData = {
  title: "11ty Starter Site",
  description: "This is a basic 11ty starter template with my most commonly used features and modern tooling",
  locale: 'en',
  baseUrl: baseUrl,
}

const toAbsoluteUrl = (url) => {
  return new URL(url, site.baseUrl).href;
}

const cdnUrl = (url) => {
  return `${cdn.url}${url}${params}` // return new URL(url, cdn.url).href;
}

const cdnUrl2 = (url) => {
  return `${cdn2.url}${url}` // return new URL(url, cdn.url).href;
}

module.exports = function(eleventyConfig) {

  /* --- COLLECTIONS --- */
  eleventyConfig.addCollection('posts', function(collectionApi) {
    return collectionApi.getFilteredByGlob('src/blog/posts/**/*.md')
  });


  /* --- GLOBAL DATA --- */
  eleventyConfig.addGlobalData("site", globalSiteData);


  /* --- YAML SUPPORT --- */
  eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));
  eleventyConfig.addDataExtension("yml", contents => yaml.load(contents));


  /* --- PLUGINS --- */
  eleventyConfig.addPlugin(pluginRss); // just includes absolute url helper function
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(EleventyVitePlugin, {});


  /* --- SHORTCODES --- */
  // Image shortcode config
  let defaultSizesConfig = "(min-width: 1200px) 1400px, 100vw"; // above 1200px use a 1400px image at least, below just use 100vw sized image

  eleventyConfig.addShortcode("image", async function(src, alt, sizes=defaultSizesConfig) {
		console.log(`Generating image(s) from:  ${src}`)
    let metadata = await Image(src, {
			widths: [800, 1500],
			formats: ["webp", "jpeg"],
      urlPath: "/images/",
			outputDir: "./_site/images/",
			filenameFormat: function (id, src, width, format, options) {
				const extension = path.extname(src)
				const name = path.basename(src, extension)
				return `${name}-${width}w.${format}`
			}
		});

		let imageAttributes = {
			alt,
			sizes,
			loading: "lazy",
			decoding: "async",
		};

		return Image.generateHTML(metadata, imageAttributes);
	});

  // Output year for copyright notices
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);


  /* --- FILTERS --- */

  // absolute url
  eleventyConfig.addFilter('toAbsoluteUrl', toAbsoluteUrl);

  // cdn
  eleventyConfig.addFilter('cdn', cdnUrl);
  eleventyConfig.addFilter('cdn2', cdnUrl2);

  // Date format
  eleventyConfig.addFilter("newsDate", (dateObj, format = "dd LLL yyyy") => {
    if(typeof dateObj === "string") {
      return DateTime.fromISO(dateObj).toFormat(format);
    } else if(typeof dateObj === "number") {
      dateObj = new Date(dateObj);
    }
    return DateTime.fromJSDate(dateObj).toFormat(format, { locale: "pt-br" });
  });

  // Sorting
  eleventyConfig.addCollection("postsNewest", function(collectionApi) {
    return collectionApi.getFilteredByTag("posts").sort(function(a, b) {
      //return a.date - b.date; // sort by date - ascending
      return b.date - a.date; // sort by date - descending
      //return a.inputPath.localeCompare(b.inputPath); // sort by path - ascending
      //return b.inputPath.localeCompare(a.inputPath); // sort by path - descending
    });
  });

  // Custom Random Helper Filter (useful for ID attributes)
  eleventyConfig.addFilter("generateRandomIdString", function (prefix) {
    return prefix + "-" + Math.floor(Math.random() * 1000000);
  });


  /* --- TRANSFORMS --- */
  eleventyConfig.addTransform('htmlmin', function (content, outputPath) {
    if (
      process.env.ELEVENTY_PRODUCTION &&
      outputPath &&
      outputPath.endsWith('.html')
    ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      })
      return minified
    }
    return content
  })

  /* --- PASSTHROUGHS --- */
  // eleventyConfig.addPassthroughCopy('./assets/**/*.*');
  eleventyConfig.addPassthroughCopy('src/assets/css');
  eleventyConfig.addPassthroughCopy('src/assets/js');
  eleventyConfig.addPassthroughCopy('./src/_redirects');
  eleventyConfig.addPassthroughCopy('./src/admin/assets/**/*.*');
  eleventyConfig.addPassthroughCopy('./src/admin/identity/**/*.html');
  eleventyConfig.addWatchTarget('./assets/**/*.*');

  /* --- BASE CONFIG --- */
  return {
    dir: {
      input: 'src',
      includes: '_includes',
      output: '_site',
      layouts: '_includes/layouts',
      data: 'data',
    },
    templateFormats: ['md', 'njk', 'txt', 'yml'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
  }
};