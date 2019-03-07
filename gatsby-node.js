// /*
//  *
//  * Environment variables (for Firebase)
//  *
//  */

// // require('dotenv').config({
// //   path: `.env.${process.env.NODE_ENV}`
// // })

// /*
//  *
//  * PurgeCSS variables
//  *
//  */

// // const PurgeCssPlugin = require(`purgecss-webpack-plugin`)
// const path = require(`path`)
// // const glob = require(`glob`)

// // const PATHS = {
// //   src: path.join(__dirname, `src`)
// // }

// // const purgeCssConfig = {
// //   paths: glob.sync(`${PATHS.src}/**/*.js`, { nodir: true }),
// //   extractors: [
// //     {
// //       // Custom extractor to allow special characters (like ":") in class names
// //       // See: https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css-with-purgecss
// //       extractor: class {
// //         static extract(content) {
// //           return content.match(/[A-Za-z0-9-_:/]+/g) || []
// //         }
// //       },
// //       extensions: [`js`]
// //     }
// //   ],
// //   // TODO: remove unnecessary items:
// //   whitelist: [
// //     `carousel-cell`,
// //     `carousel-input`,
// //     `carousel-label`,
// //     `bg-black`,
// //     `bg-transparent`,
// //     `cursor-not-allowed`,
// //     `filter-label`,
// //     `o-50`,
// //     `o-0`
// //   ],
// //   whitelistPatterns: [
// //     /html/,
// //     /body/,
// //     /flickity/,
// //     /headroom/,
// //     /ReactModal/,
// //     /ril/,
// //     /slick/,
// //     /textarea/
// //   ]
// // }

// /*
//  *
//  * Webpack updates
//  *
//  */

// exports.onCreateWebpackConfig = ({ actions, stage }) => {
//   // if (stage.includes(`develop`)) return

//   // Add PurgeCSS in production
//   // See: https://github.com/gatsbyjs/gatsby/issues/5778#issuecomment-402481270
//   // if (stage.includes(`build`)) {
//   //   actions.setWebpackConfig({
//   //     plugins: [new PurgeCssPlugin(purgeCssConfig)]
//   //   })
//   // }

//   if (stage === `build-html`) {
//     actions.setWebpackConfig({
//       module: {
//         rules: [
//           {
//             test: [
//               /intersection-observer/,
//               /lightbox-react/,
//               /react-image-lightbox/,
//               /twitter-fetcher/,
//             ],
//             loader: `null-loader`,
//           },
//         ],
//       },
//     })
//   }
// }

// /*
//  *
//  * Template pages (generated programmatically from template.yaml)
//  *
//  */

// // See: https://www.gatsbyjs.org/tutorial/part-seven/
// // See: https://stackoverflow.com/questions/48652257/how-to-create-multiple-pages-from-single-json-files-in-gatsby

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions

//   return new Promise((resolve, reject) => {
//     // TODO: update `allTemplateYaml` to correct file name
//     graphql(`
//       {
//         allTemplateYaml {
//           edges {
//             node {
//               slug
//             }
//           }
//         }
//       }
//     `).then(result => {
//       // TODO: update `allTemplateYaml` to correct file name
//       result.data.allTemplateYaml.edges.forEach(({ node }) => {
//         createPage({
//           path: node.slug,
//           // TODO: update `template.js` to correct file name
//           component: path.resolve(`./src/ui/@ex-templates/Template.js`),

//           // Send additional data to page from YAML (or query inside template)
//           context: {
//             slug: node.slug,
//           },
//         })
//       })
//       resolve()
//     })
//   })
// }
