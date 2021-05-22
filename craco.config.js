const path = require("path");

module.exports = {
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
  webpack: {
    alias: {
      "@features": path.resolve(__dirname, "./src/features/"),
      "@components": path.resolve(__dirname, "./src/components/"),
    },
  },
};
