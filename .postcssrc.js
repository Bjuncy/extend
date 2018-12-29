// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": [
    require('postcss-import'),
    require('postcss-url'),
    require('postcss-calc'),
    require('postcss-mixins'),
    require('postcss-bem-fix')({
      defaultNamespace: 'ex',
      separators: {
        descendent: '-' // overwrite any default separator for chosen style
      },
    }),
    require('postcss-cssnext'),
    // to edit target browsers: use "browserslist" field in package.json
  ]
}
