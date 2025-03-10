const config = {
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "latest",
  },
  plugins: ["simple-import-sort", "import", "prettier-plugin-tailwindcss"],
  rules: {
    "simple-import-sort/imports": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
  },
}

// eslint-disable-next-line no-undef
module.exports = config;
