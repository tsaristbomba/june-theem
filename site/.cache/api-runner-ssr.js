var plugins = [{
      name: 'gatsby-plugin-react-helmet',
      plugin: require('D:/Capsule Corp/BOILER PLATES/Gatsby/Themes/gatsby-theme-june/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      name: 'gatsby-plugin-styled-components',
      plugin: require('D:/Capsule Corp/BOILER PLATES/Gatsby/Themes/gatsby-theme-june/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[],"displayName":true,"fileName":true,"minify":true,"namespace":"","transpileTemplateLiterals":true,"topLevelImportPaths":[],"pure":false},
    },{
      name: 'gatsby-plugin-image',
      plugin: require('D:/Capsule Corp/BOILER PLATES/Gatsby/Themes/gatsby-theme-june/node_modules/gatsby-plugin-image/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      name: 'gatsby-plugin-manifest',
      plugin: require('D:/Capsule Corp/BOILER PLATES/Gatsby/Themes/gatsby-theme-june/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"JUNE Theme","short_name":"JUNE","start_url":"/","background_color":"#f7f0eb","theme_color":"#29ABFF","display":"standalone","icon":"D:\\Capsule Corp\\BOILER PLATES\\Gatsby\\Themes\\gatsby-theme-june\\packages\\gatsby-theme-june/src/images/icon.jpeg","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"50c0827bbf0ba076370de9693a496052"},
    },{
      name: 'gatsby-plugin-offline',
      plugin: require('D:/Capsule Corp/BOILER PLATES/Gatsby/Themes/gatsby-theme-june/node_modules/gatsby-plugin-offline/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      name: 'gatsby-plugin-mdx',
      plugin: require('D:/Capsule Corp/BOILER PLATES/Gatsby/Themes/gatsby-theme-june/node_modules/gatsby-plugin-mdx/gatsby-ssr'),
      options: {"plugins":[],"extensions":[".mdx",".md"],"defaultLayouts":{"default":"D:\\Capsule Corp\\BOILER PLATES\\Gatsby\\Themes\\gatsby-theme-june\\packages\\gatsby-theme-june\\src\\components\\Layout.jsx"},"gatsbyRemarkPlugins":[],"lessBabel":false,"remarkPlugins":[],"rehypePlugins":[],"mediaTypes":["text/markdown","text/x-markdown"],"root":"D:\\Capsule Corp\\BOILER PLATES\\Gatsby\\Themes\\gatsby-theme-june\\site"},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    try {
      const result = plugin.plugin[api](args, plugin.options)
      if (result && argTransform) {
        args = argTransform({ args, result })
      }
      return result
    } catch (e) {
      if (plugin.name !== `default-site-plugin`) {
        // default-site-plugin is user code and will print proper stack trace,
        // so no point in annotating error message pointing out which plugin is root of the problem
        e.message += ` (from plugin: ${plugin.name})`
      }

      throw e
    }
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
