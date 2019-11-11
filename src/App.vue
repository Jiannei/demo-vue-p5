<template>
  <div id="app">
      <div id="canvas"></div>
  </div>
</template>

<script>
export default {
  name: 'app',
    mounted() {
      const  sketch = function (p5) {
          // NOTE: Set up is here
          p5.setup = function () {
              let canvas = p5.createCanvas(600, 400);
              canvas.parent('#canvas');
          }

          // NOTE: Draw is here
          p5.draw = function () {
              p5.background(102);
              p5.ellipse(50, 50, 80, 80);
          }
      }
      
        // NOTE: Use p5 as an instance mode
        const P5 = require('p5');
        new P5(sketch)
    }
}
</script>

<style>

</style>
