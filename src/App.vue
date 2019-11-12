<template>
  <div id="app">
      <span>今日云景好，水绿秋山明。</span>
      <div id="canvas" style="position:absolute;top: 0;z-index: -1"></div>
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
        new P5(sketch())

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
    html, body {
        padding: 0;
        margin: 0;
        overflow: hidden;
    }

</style>
