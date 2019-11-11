<template>
  <div id="app">
      <div id="canvas"></div>
  </div>
</template>

<script>
const sketch = require('./sketchs/simple')
export default {
  name: 'app',
    mounted() {
        // NOTE: Use p5 as an instance mode
        const P5 = require('p5');
        new P5(sketch.main)
    }
}
</script>

<style>

</style>
