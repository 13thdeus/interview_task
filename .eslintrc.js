module.exports = {
  parser: require.resolve("@typescript-eslint/parser"),
  parserOptions: {
    warnOnUnsupportedTypeScriptVersion: false,
    sourceType: "module",
    jsx: true,
    project: "tsconfig.json",
    ecmaVersion: 6,
    jsxPragma: "React",
    createDefaultProgram: true,
  },
  ignorePatterns: [],
  extends: [
    "react-strong",
  ],
  overrides: [{
    files: "*",
    rules: {
      "react-native/no-unused-styles": "off",
    },
  }, {
    files: "*.ts",
    rules: {
      "@typescript-eslint/consistent-type-assertions": "off",
    },
  }],
  settings: {
    "import/resolver": {
      "babel-plugin-root-import": {
        "rootPathPrefix": "~",
        "rootPathSuffix": "src",
      },
    },
    "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
  },
};
