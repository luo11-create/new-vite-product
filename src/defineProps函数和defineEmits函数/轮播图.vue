<script >
import { ref,reactive,onMounted} from 'vue';
export default {
  name:"App",
  setup() {
    let img = reactive(['image1.jpg', 'image2.jpg', 'image3.jpg'])
    let currentIndex = ref(0)
    let intervalId = ref(null)
    onMounted(() => {
      this.startSlide()
    })

    function startSlide() {
      this.intervalId = setInterval(() => {
        this.nextSlide()
      }, 3000)
    }
    function stopSlide() {
      clearInterval(this.intervalId)
    }
    function nextSlide(){
      this.currentIndex = (this.currentIndex + 1) % this.img.length
    }
    function prevSlide(){
      this.currentIndex = (this.currentIndex + 1) % this.img.length
    }
    return {img,currentIndex,intervalId,prevSlide,nextSlide, startSlide,stopSlide}
  }
}
</script>

<template>
  <div class="slider">
    <img :src="img[currentIndex]" alt="Slide">
  </div>
  <button @click="prevSlide"><</button>
  <button @click="nextSlide">></button>
</template>

<style scoped>
.slider {
  width: 100%;
  height: 300px;
  overflow: hidden;
}

.slider img {
  width: 100%;
  height: auto;
}

button {
  margin-top: 10px;
}
</style>