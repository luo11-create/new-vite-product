<script>
import axios from 'axios';

export default {
  data() {
    return {
      account: {
        username: '',
        password: ''
      }
    };
  },
  methods: {
    submitAccount() {
      // 发送GET请求到后端API
      axios.get('https://jsonplaceholder.typicode.com/posts/1', {
        params: this.account
      })
          .then(response => {
            console.log('账户提交成功', response.data);
            // 处理成功响应，例如显示成功信息或者跳转页面
          })
          .catch(error => {
            console.error('账户提交失败', error);
            // 处理错误，例如显示错误信息或者重试
          });
    }
  }
}
</script>

<template>
  <div>
    <form @submit.prevent="submitAccount">
      <label for="username">用户名:</label>
      <input type="text" id="username" v-model="account.username">
      <br>
      <label for="password">密码:</label>
      <input type="password" id="password" v-model="account.password">
      <br>
      <button type="submit">提交账户</button>
    </form>
  </div>
</template>

<style scoped>

</style>