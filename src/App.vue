<script>
import {ref,reactive,toRefs,toRef} from 'vue'
export default{
  name:'app',
  setup(){
    let person=reactive({
      name:'张三',
      age:18,
      job:reactive({
        j1:{
          salary:20
        }
      })
    })
    return{
      ...toRefs(person)
    }
  }
}
</script>

<template>
  <h3>姓名:{{name}}</h3>
  <h3>年龄:{{age}}</h3>
  <h3>薪资:{{job.j1.salary}}k</h3>
  <button @click="name+='~'">修改名字</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">涨薪</button>
</template>

<style scoped>

</style>