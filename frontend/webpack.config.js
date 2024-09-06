const createExpoWebpackConfigAsync = require("@expo/webpack-config");

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(
    {
      ...env,
      babel: {
        dangerouslyAddModulePathsToTranspile: ["nativewind"],
      },
    },
    argv
  );

  config.module.rules.push({
    test: /\.css$/i,
    use: ["style-loader", "css-loader", "postcss-loader"],
  });

  return config;
};
