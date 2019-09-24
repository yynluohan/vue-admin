<template>
  <div id="app">
    <div class="app_header">
      <div>product management</div>
      <div>admin</div>
    </div>
    <div class="app_section">
      <Menu />
      <div class='app_section_content'>
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from './common/Menu';
  export default {
    name: 'App',
    components: {
      Menu
    },
    watch: {
      $route: {
        handler() {
          if (!window.localStorage.token) {
            this.$router.replace('/login')
          }
        },
      },
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    font-size: 16px;
  }
  body {
    margin: 0px;
  }
  .app_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2em;
    margin-bottom: 1em;
    height: 64px;
    background-color: #000;
    color: #fff;
  }
  .app_section {
    display: flex;
    justify-content: space-between;
  }
  .app_section_content {
    width:calc(100% - 250px - 1em);
    margin-left: 1em;
  }
</style>
