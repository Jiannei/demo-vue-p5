<template>
  <div id="app">
      <div id="canvas"></div>
      {{ message }}
  </div>
</template>

<script>
let sketch = require('./sketchs/simple')

export default {
  name: 'app',
    // NOTE: Add data
    data() {
        return {
            message: ""
        }
    },
    mounted() {
        // NOTE: Use p5 as an instance mode
        const P5 = require('p5');
        new P5(sketch.main)

        // NOTE: p5.js
        sketch.setDelegate(this.callbackOnP5);
    },
    methods: {
        // NOTE: Add callback method
        callbackOnP5: function(timeStr) {
            this.message = timeStr;
        }
    },
}
</script>

<style>

</style>
