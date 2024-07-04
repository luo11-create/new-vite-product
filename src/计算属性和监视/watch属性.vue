<script>
import {ref,reactive,watch} from "vue";
export default {
  name:'Demo',
  setup(){
    let msg=ref("你好啊")
    let sum=ref(0)
    let person=reactive({
      name:'张三',
      age:18,
      job:{
        j1:{
          salary:20
        }
      }
    })
    //情况一: 监视ref所定义的一个响应式数据
    /*watch(sum,(newValue,oldValue)=>{
      console.log('sum变了',newValue,oldValue)
    },{immediate:true})*/

    //情况二: 监视ref所定义的多个响应式数据
    /*watch([sum,msg],(newValue,oldValue)=>{
      console.log('sum变了',newValue,oldValue)
    },{immediate:true})*/

    /*情况三: 监视reactive所定义的一个响应式数据
       1.注意: 此处无法正确的获取oldValue
       2.注意: 强制开启了深度监视(deep配置无效)*/
    /*watch(person,(newValue,oldValue)=>{
      console.log('person变了',newValue,oldValue)
    },{deep:true})*/

    //情况四: 监视reactive所定义的一个响应式数据中的某个属性
    /*watch(()=>person.age,(newValue,oldValue)=>{
      console.log('person的age变了',newValue,oldValue)
    })*/

    //情况五: 监视reactive所定义的一个响应式数据中的某些属性
   /* watch([()=>person.age,()=>person.name],(newValue,oldValue)=>{
      console.log('person的age或name变了',newValue,oldValue)
    })*/

    //特殊情况:
    watch(()=>person.job,(newValue,oldValue)=>{
      console.log('person的job变了',newValue,oldValue)
    },{deep:true})
    return{
      msg,
      sum,
      person
    }
  }

}
</script>

<template>
  <span>{{msg}}</span><br>
  <button @click="msg+='~'">改变</button><br>
  <hr>
  <span>{{sum}}</span><br>
  <button @click="sum++">增加</button>
  <hr>
  <span>姓名:{{person.name}}</span><br>
  <span>年龄:{{person.age}}</span><br>
  <span>年龄:{{person.job.j1.salary}}K</span><br>
  <button @click="person.name+='~'">改变姓名</button>
  <button @click="person.age++">增加年龄</button>
  <button @click="person.job.j1.salary++">涨薪</button>
</template>

<style scoped>

</style>