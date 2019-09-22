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
export default {
  name: 'LoginForm',
  props: {
    msg: String
  },
  data() {
      return {
        form: {
          account: '',
          password: ''
        }
      }
    },
    methods: {
     onSubmit(e) {
       console.log('submit!',e,this);
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
