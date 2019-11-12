<template>
  <div id="app">
      <div id="canvas"></div>
      <div>{{ message }}</div>
  </div>
</template>

<script>
import P5 from 'p5'
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
        new P5(sketch({delegate:this.callbackOnP5}))

        // NOTE: p5.js
        // sketch.setDelegate(this.callbackOnP5);
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
