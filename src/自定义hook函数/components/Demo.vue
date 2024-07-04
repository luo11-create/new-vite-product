<script>
import {ref} from 'vue'
import usePoint from '../hooks/usePoint.js'
export default {
  name: 'Demo',
  setup() {

    let sum = ref(0)
    let point=usePoint()
    return{sum,point}
  }
}
</script>

<template>
  <h2>当前求和为:{{sum}}</h2>
  <button @click="sum++">点击+1</button>
  <h2>当前点击的鼠标位置为:{{point.x}}-{{point.y}}</h2>
</template>

<style scoped>

</style>