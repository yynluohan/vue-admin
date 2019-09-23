<template>
  <div>
    <div class="home_header">
      <div>product management</div>
      <div>admin</div>
    </div>
    <Menu />
  </div>
</template>

<script>
import Menu from '../common/Menu.vue';
export default {
  name: 'HelloWorld',
  components: {
    Menu,
  }
}
</script>

<style scoped>
  .home_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2em;
    margin-bottom: 1em;
    height: 64px;
    background-color: #000;
    color: #fff;
  }
</style>
