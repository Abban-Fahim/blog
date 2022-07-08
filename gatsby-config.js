module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/page-layout.jsx"),
        },
      },
    },
    "gatsby-plugin-sass",
  ],
};
