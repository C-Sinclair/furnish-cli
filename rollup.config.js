import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";

export default [
  {
    input: "src/index.js",
    output: {
      file: "lib/index.es.js",
      format: "es",
      name: "furnish-cli",
      exports: "named"
    },
    plugins: [
      resolve(),
      babel({
        exclude: "node_modules/**"
      })
    ]
  },
  {
    input: "src/index.js",
    output: {
      file: "lib/index.esm.js",
      format: "esm",
      name: "furnish-cli",
      exports: "named"
    },
    plugins: [
      resolve(),
      babel({
        exclude: "node_modules/**"
      })
    ]
  },
  {
    input: "src/index.js",
    output: {
      file: "lib/index.cjs.js",
      format: "cjs",
      name: "furnish-cli",
      exports: "named"
    },
    plugins: [
      resolve(),
      babel({
        exclude: "node_modules/**"
      })
    ]
  },
  {
    input: "src/index.js",
    output: {
      file: "lib/index.umd.js",
      format: "umd",
      name: "furnish-cli",
      exports: "named"
    },
    plugins: [
      resolve(),
      babel({
        exclude: "node_modules/**"
      })
    ]
  }
];
