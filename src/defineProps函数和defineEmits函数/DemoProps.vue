<script setup>
import { ref,defineProps,defineComponent,defineEmits} from 'vue';
/*const MyComponent = defineComponent({
  props: {
      props: {
    // 这里可以定义 props 的类型和默认值
    propA: String,
    propB: {
      type: Number,
      default: 100
    },
    propC: {
      type: Boolean,
      default: false
    }
    // 其他 props 配置
  },
  setup(props) {
  // 使用 defineProps 来定义 props
    const { propA, propB, propC } = defineProps();

    // 在 setup 函数中访问 props
    console.log(propA); // 访问 propA
    console.log(propB); // 访问 propB
    console.log(propC); // 访问 propC

    return {
    // 返回需要暴露给模板的数据或方法
      greeting: `Hello, ${props.name}!`
    }
  }
})*/
//export default MyComponent

import ChildEmits from "./components/ChildEmits.vue";

// export default defineComponent({
//   components: {
//     MyComponent
//   },
//     handleCustomEvent(payload) {
//       console.log('Received custom event:', payload);
//       // 处理收到的事件数据
//     }
// });
</script>

<template>
  <div>
<!--    <my-component @custom-event="handleCustomEvent"></my-component>-->
    <ChildEmits></ChildEmits>
  </div>
</template>

<style scoped>

</style>