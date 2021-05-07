import { createApp } from 'vue'
import App from './App.vue'
import { ImgComparisonSlider } from '@img-comparison-slider/vue'

const app = createApp(App)
app.component('ImgComparisonSlider', ImgComparisonSlider)
app.mount('#app')
