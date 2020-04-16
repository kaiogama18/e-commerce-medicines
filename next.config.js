const tailwindcss = require('tailwindcss');

module.exports = {
  webpack(config, { dev }) {
    // modify it!
    return config
  },
  plugins: [
    tailwindcss('./tailwind.config.js'),
    require('autoprefixer'),
  ],
}


