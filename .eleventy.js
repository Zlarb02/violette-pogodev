module.exports = function(eleventyConfig) {
  // Copy the assets directory
  eleventyConfig.addPassthroughCopy("assets");
  
  // Copy the CSS file
  eleventyConfig.addPassthroughCopy("_site/css");
  
  // Watch CSS files for changes
  eleventyConfig.addWatchTarget("./src/styles/");
  eleventyConfig.addWatchTarget("./_site/css/styles.css");
  
  // Add date filter
  eleventyConfig.addFilter("date", function(value, format) {
    if (format === "yyyy") {
      return new Date().getFullYear();
    }
    return value;
  });
  
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts"
    }
  };
};