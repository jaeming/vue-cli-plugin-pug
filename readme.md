# vue-cli-plugin-pug

[![npm version](https://badge.fury.io/js/vue-cli-plugin-pug.svg)](https://badge.fury.io/js/vue-cli-plugin-pug)
Vue CLI 3 plugin to add pug templating to your components and compilation of .pug template files

## Getting Started
Either add the plugin from the `vue ui` interface, or run the following in your Vue-cli 3 project: 
```sh
vue add pug
```
You can now start using pug templates in your components:
```html
<template lang='pug'>
  div
    h1 Hello World!
</template>
```

The plugin will also convert `.pug` files to html, so you can add entries to `vue.config.js` and get a (build) output file of `./dist/public/index.html`:

```js
module.exports = {
  pages: {
    index: {
      entry: './src/main.js',
      template: './src/index.pug'
    }
  }
}
```