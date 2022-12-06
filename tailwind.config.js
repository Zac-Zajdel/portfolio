module.exports = {
  content: [
    './components/**/*.js',
    './components/**/*.tsx',
    './pages/**/*.{md,mdx}',
    './theme.config.js',
  ],
  plugins: [require('@tailwindcss/line-clamp')],
}
