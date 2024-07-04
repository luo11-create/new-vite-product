<script>
import {h} from 'vue'
export default{
  name:'App',
  setup(){
    let name="张三"
    let age=22
    let sex="男"
    function sayHallo(){
      alert(`你好,我叫${name},今年${age}岁了,性别${sex}`)
    }
    return{
      name,
      age,
      sex,
      sayHallo

    }

  }
}


</script>

<template>
  <h2>姓名:{{name}}</h2>
  <h2>年龄:{{age}}</h2>
  <h2>性别:{{sex}}</h2>
  <button @click="sayHallo">点击介绍</button>
</template>

<style scoped>

</style>