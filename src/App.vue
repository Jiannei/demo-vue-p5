<template>
  <div id="app">
      <div id="canvas"></div>
  </div>
</template>

<script>
import sketch from './sketchs/simple'

export default {
  name: 'app',
    mounted() {
        // NOTE: Use p5 as an instance mode
        const P5 = require('p5');
        new P5(sketch)
    }
}
</script>

<style>

</style>
