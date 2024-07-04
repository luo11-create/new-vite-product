<script>
import{reactive,computed} from "vue";
export default {
  name:'Demo',
  setup(){
    let person=reactive({
      fristName:'张',
      lastName:'三'
    })
    let fullName=computed({
      get(){
        return person.fristName+'-'+person.lastName
      },
      set(value){
        let nameArr=value.split("-")
        person.fristName=nameArr[0]
        person.lastName=nameArr[1]
      }
    })
    return{
      person,
      fullName
    }
  }
}

</script>

<template>
  <input v-model="person.fristName"/><br>
  <input v-model="person.lastName"/><br>
  全名:{{fullName}}<br>
  全名:<input v-model="fullName"/>
</template>

<style scoped>

</style>