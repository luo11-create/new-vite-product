<script setup>
import {defineComponent} from "vue";

const emit = defineEmits(['handleClick']);
const handleClick = () => {
  // 触发自定义事件 'custom-event'，并传递参数
  emit('handleClick', 'hello from child');
  console.log(123) // return
}
// const MyComponent = defineComponent({
//
//   // setup(props, { emit }) {
//   //   const handleClick = () => {
//   //     // 触发自定义事件 'custom-event'，并传递参数
//   //     emit('handleClick', 'hello from child');
//   //   };
//   //   return {
//   //     handleClick
//   //   };
//   // }
//
//   setup(props, { emit }) {
//     const handleClick = () => {
//       // 触发自定义事件 'custom-event'，并传递参数
//       emit('handleClick', 'hello from child');
//     };
//     return {
//       handleClick
//     };
//   }
// });

// // 定义组件可以触发的事件
// MyComponent.emits = defineEmits(['custom-event']);

</script>

<template>
  <button @click="handleClick">点击打印</button>
</template>

<style scoped>

</style>