<script setup>
import {defineComponent, ref, toRef} from "vue";
import useUserStore from "./stores/user.js";
import {storeToRefs} from "pinia";
const useUser = useUserStore();
const {username,age,like,hobby} = storeToRefs(useUser);
//修改state
const ediPiniaHandle = ()=>{
  useUser.username+="噶";
  useUser.age++;
  // useUser.like="boy";
}
const editAll = ()=>{
  // useUser.updateUserPartial({
  //   username:"鸭蛋",
  //   age:21,
  // })
  useUser.$patch({
    username:"鸭蛋123123",
    age:222
  })
}
const replaceAll = ()=>{
  useUser.$state={
   username:"狗子",
   age:22,
   // like:"boy",
   // obj:{money:10,friend:1}
  }
}

const resetBtn = ()=>{
  useUser.$reset()
}
//getters的用法
defineComponent({
  props:{
    vueGetters:Object//接收getters
  }
})
const findHobby = (id)=>{
  const hobby=useUser.returnFunction(id);
  console.log("Found Hobby",hobby.name)
}
//action的用法
const add=()=>{
  useUser.addAge(5)
}
const getList = ()=>{
  useUser.getList()
}
</script>

<template>
<!--state的使用-->
  <div>我叫:{{username}},我今年:{{age}}岁了,喜欢{{like}}</div>
  <div>爱好有</div>
  <div v-for="item in hobby" :key="item.id">
    <div>{{item.name}}</div>
  </div>
  <button @click="ediPiniaHandle">点击修改</button>
  <button @click="editAll">点击修改全部</button>
  <button @click="replaceAll">替换</button>
  <button @click="resetBtn">复原</button>
  <hr/>
  <div>乘2:{{useUser.doubleAge}}</div>
  <div>加一:{{useUser.addOption}}</div>
  <div>返回一个函数查找id为1的爱好:{{useUser.returnFunction(1)}}</div>
  <button @click="findHobby(1)">Find Hobby with id</button>
<!--  <h3>{{useUser.age}}</h3>-->
<!--  <button @click="doubleAge">乘二</button>-->
  <hr/>
  <button @click="add">增加</button>
  <button @click="getList">ooo</button>
</template>

<style scoped>

</style>