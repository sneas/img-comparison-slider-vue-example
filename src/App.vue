<template>
  <ImgComparisonSlider>
    <!-- eslint-disable -->
    <img
        slot="before"
        style="width: 100%"
        src="https://sneas.github.io/img-comparison-slider/demo/images/cat.jpg"
    />
    <img
        slot="after"
        style="width: 100%"
        src="https://sneas.github.io/img-comparison-slider/demo/images/dog.jpg"
    />
    <!-- eslint-enable -->
  </ImgComparisonSlider>
</template>

<script>
import { ImgComparisonSlider } from '@img-comparison-slider/vue'

export default {
  name: 'App',
  components: {
    ImgComparisonSlider
  }
}
</script>
