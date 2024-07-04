<script>
import axios from 'axios';

export default {
  methods: {
     tt(){
      // 示例数据
      const dataToSend = {
        userId: 34344234,
        id: 24234234
      };

      // 使用axios发送GET请求
      axios.get('https://jsonplaceholder.typicode.com/posts/1', {
        params: dataToSend
      })
          .then(response => {
            console.log('提交成功', response.data);
            // 处理返回的数据
          })
          .catch(error => {
            console.error('提交失败', error);
            // 处理错误
          });
    }
  }
}
</script>

<template>
  <div>
    <button @click="tt">提交数据</button>
  </div>
</template>

<style scoped>

</style>