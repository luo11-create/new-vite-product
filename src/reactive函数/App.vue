<script>
import {h, ref,reactive} from 'vue'
export default{
  name:'App',
  setup(){
    let name=ref("张三")
    let age=ref(22)
    let job=reactive({//reactive函数,用于复杂的数据对象,响应式深层次的对象
      object:"前端开发",
      salary:"5k"
    })
    let hobby=reactive(["抽烟","喝酒","烫头"])
    function changeInfo(){
      name.value="李四"
      age.value=23
      job.object="ui工程师"
      job.salary="10k"
      hobby[0]="学习"
    }
    return{
      name,
      age,
      job,
      hobby,
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
  <h2>爱好:{{hobby}}</h2>
  <button @click="changeInfo">点击修改个人信息</button>
</template>

<style scoped>

</style>