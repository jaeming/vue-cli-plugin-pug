# vue-cli-plugin-pug

[![npm version](https://badge.fury.io/js/vue-cli-plugin-pug.svg)](https://badge.fury.io/js/vue-cli-plugin-pug)
Vue CLI 3 plugin to add pug templating to your components.

## Getting Started
Just run the following in your Vue-cli 3 project: 
```sh
vue add pug
```
You can now start using pug template in your components:
```html
<template lang='pug'>
  div
    h1 Hello World!
</template>
```

Note: this plugin currently only supports pug templating within vue templates through `pug-plain-loader`. It does not configure for raw `.pug` files [^1]. 

[^1]: if there is any interest in this use case, feel free to make an issue on the github repo or submit a PR Feedback is welcomed.
