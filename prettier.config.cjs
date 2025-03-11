const config = {
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "latest",
  },
  plugins: ["eslint-plugin-simple-import-sort", "prettier-plugin-tailwindcss"],
  rules: {
    "eslint-plugin-simple-import-sort/imports": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
  },
};

// eslint-disable-next-line no-undef
module.exports = config;
