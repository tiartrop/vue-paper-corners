vue-paper-corners
===

[![NPM version](https://img.shields.io/npm/v/vue-paper-corners?color=a1b858)](https://www.npmjs.com/package/vue-paper-corners)

A Vue 3.0+ component for adding a paper corner to your project page.

## Install

```bash
npm i vue-paper-corners
```

## Usage

```vue
<template>
  <paper-corners
    link="__blank"
    size="40"
    bg-color="#fff"
    color="#eee"
    position-x="right"
    position-y="bottom"
  >
    <!-- Your content goes here! -->
  </paper-corners>
</template>

<script>
import { defineComponent } from 'vue';
import PaperCorners from 'vue-paper-corners';

export default defineComponent({
  components: {
    PaperCorners
  }
});
</script>
```

## API

| Name | Description | Type | Accepted Values | Default |
| :----- | :---- | :----: | :----: | :----: |
| link | The link to your project page | string | — |  — |
| size | The width and height of the corner | string / number | — | 40px |
| color | The color of the paper | string | — | #eee |
| bgColor | The background color of the corner | string | — | #fff |
| positionX | The horizontal position of the corner | string | right/left | right |
| positionY | The vertical position of the corner | string | bottom/top | bottom |

## Thanks

Inspired by [jCorner](https://github.com/Ovilia/jCorner).

## License

Licensed under the MIT License.