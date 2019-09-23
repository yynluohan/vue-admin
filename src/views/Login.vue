<template>
  <div class='login_contain'>
    <div class='login_box'>
      <h2 class='login_text'>请登录</h2>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="form.account"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password" type='password'></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" class='login_button'>登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { query,create } from '../framwork/utils/services'
export default {
  name: 'LoginForm',
  data() {
    return {
      form: {
        account: '',
        password: ''
      }
    }
  },
  methods: {
     onSubmit() {
       console.log('77777====')
       const submitData = { ...this.form };
       if (!submitData.account) {
         this.$message({
          showClose: true,
          message: '请填写用户名！',
          type: 'error'
        });
        return;
       }
       if (!submitData.password) {
         this.$message({
          showClose: true,
          message: '请填写密码！',
          type: 'error'
        });
        return;
       }
       create('/api/sys/oauth/login',submitData).then(({ code,data,message }) => {
         if (code === 200 && data.accessToken) {
           window.localStorage.token = data.accessToken;
           this.$router.push('/')
         }
       })
     }
   }
}
</script>

<style scoped>
  .login_contain {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
  .login_text {
    padding-bottom: 3em;
    margin-left: 3em;
    font-size: 18px;
    font-weight: 600;
  }
  .login_box {
    padding: 2em 8em 6em 5em;
    background-color: #d1e7ff;
    box-shadow: 0px 0px 50px #ebeef5;
  }
  .login_button {
    width:100%;
  }
</style>
