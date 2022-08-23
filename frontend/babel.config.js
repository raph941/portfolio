const { IS_SITEMAP_SCRIPT } = process.env; // A hack to ensure we can properly compile "lib/sitemap-builder.js"

let presets = ["es2015", "react"];
const plugins = [["styled-components", { ssr: true }]];

if (IS_SITEMAP_SCRIPT) {
  presets = ["es2015", "react"];
} else {
  presets = ["next/babel"];
}

module.exports = { presets, plugins };
