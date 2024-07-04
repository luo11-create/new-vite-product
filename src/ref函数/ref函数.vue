<script>
import {h, ref} from 'vue'
export default{
  name:'App',
  setup(){
    let name=ref("张三")
    let age=ref(22)
    let job=ref({
      object:"前端开发",
      salary:"5k"
    })
    function changeInfo(){
      name.value="李四"
      age.value=23
      job.value.object="ui工程师"
      job.value.salary="10k"
    }
    return{
      name,
      age,
      job,
      changeInfo

    }

  }
}


</script>

<template>
  <h2>姓名:{{name}}</h2>
  <h2>年龄:{{age}}</h2>
  <h2>工作:{{job.object}}</h2>
  <h2>工资:{{job.salary}}</h2>
  <button @click="changeInfo">点击修改个人信息</button>
</template>

<style scoped>

</style>