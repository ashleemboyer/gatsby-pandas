<p align="center">
  <a href="./src/images/icon.png">
    <img alt="Panda emoji" src="./src/images/icon.png" width="60"/>
  </a>
</p>
<h1 align="center">Gatsby Pandas!</h1>

### [Steps to make it work in GitHub Pages](https://www.gatsbyjs.org/docs/how-gatsby-works-with-github-pages/)
1. Install the `gh-pages` package:
  ```
    npm install gh-pages --save-dev
  ```
2. Add a `deploy` script to [`package.json`](./package.json):
  ```javascript
    {
      "scripts": {
        "deploy": "gatsby build --prefix-paths && gh-pages -d public"
      }
    }
  ```
3. Add repository name as path prefix in [`gatsby-config.js`](./gatsby-config.js)
  ```javascript
    module.exports = {
      pathPrefix: "/reponame",
    }
  ```

### [Add HTML Attributes](https://www.gatsbyjs.org/packages/gatsby-plugin-html-attributes/)
1. Install the `gatsby-plugin-html-attributes` plugin
2. Load the plugin in [`gatsby-config.js`](./gatsby-config.js)
  ```javascript
    module.exports = {
      plugins: [
        {
          resolve: 'gatsby-plugin-html-attributes',
          options: {
            lang: 'en'
          }
        }
      ]
    }
  ```

### [Add a manifest file (PWA)](https://www.gatsbyjs.org/tutorial/part-eight/#add-a-manifest-file)
1. Install the plugin:
  ```
    npm install --save gatsby-plugin-manifest
  ```
2. Add a favicon under `src/images/icon.png`
3. Add the plugin to [`gatsby-config.js`](./gatsby-config.js)

### [Add offline support (PWA)](https://www.gatsbyjs.org/tutorial/part-eight/#add-offline-support)
1. Install the plugin:
  ```
    npm install --save gatsby-plugin-offline
  ```
2. Add the plugin to [`gatsby-config.js`](./gatsby-config.js) (after the `gatsby-plugin-manifest` plugin)

### [Add page metadata (SEO)](https://www.gatsbyjs.org/tutorial/part-eight/#add-page-metadata)
1. Install two packages:
  ```
    npm install --save gatsby-plugin-react-helmet react-helmet
  ```
2. Add the plugin to [`gatsby-config.js`](./gatsby-config.js)
3. Use `React Helmet` in pages (I put it in the [layout](./src/components/layout.js) component)
  ```html
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="Description" content="This is an example description." />
      <title>My Title</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
  ```
