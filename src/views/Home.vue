<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data: {
    message: '哈哈哈'
  },
  beforeCreate:function() {
    //创建前状态
    console.log('111',this.$el);
    console.log('111',this.$data);
    console.log('111',this.message);
  },
  created:function() {
    //创建完毕状态
    console.log('222',this.$el);
    console.log('222',this.$data);
    console.log('222',this.message);
  },
  beforeMount:function() {
    //挂载前状态
    console.log('333',this.$el);
    console.log('333',this.$data);
    console.log('333',this.message);
  },
  mounted:function() {
    //挂载后状态
    console.log('444',this.$el);
    console.log('444',this.$data);
    console.log('444',this.message);
    console.log('4444',this.$router);
    if (this.$router.history && this.$router.history.current.path === '/') {
      if (!window.localStorage.token) {
        this.$router.push('/login')
      }
    }
  },
  beforeUpdate:function() {
    //更新前状态
    console.log('555',this.$el);
    console.log('555',this.$data);
    console.log('555',this.message);
  },
  updated:function() {
    //更新完成状态
    console.log('666',this.$el);
    console.log('666',this.$data);
    console.log('666',this.message);
  },
  beforeDestroy:function() {
    //销毁前状态
    console.log('777',this.$el);
    console.log('777',this.$data);
    console.log('777',this.message);
  },
  destroyed:function() {
    //销毁完成状态
    console.log('888',this.$el);
    console.log('888',this.$data);
    console.log('888',this.message);
  }
}
</script>
