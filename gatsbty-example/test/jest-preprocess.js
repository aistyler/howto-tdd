const babelOptions = {
  presets: ["babel-preset-gatsby"],
}
const Transformer = require("babel-jest").createTransformer(babelOptions);
module.exports = Transformer;
