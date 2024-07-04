
import { defineComponent, defineEmits } from 'vue';
const MyComponent = defineComponent({
  setup(props, { emit }) {
    const handleClick = () => {
      // 触发自定义事件 'custom-event'，并传递参数
      emit('custom-event', 'hello from child');
    };

    return {
      handleClick
    };
  }
});

// 定义组件可以触发的事件
MyComponent.emits = defineEmits(['custom-event']);

export default MyComponent;
