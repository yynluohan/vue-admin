<template>
  <div class='menu_contain'>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      router=true
      active-text-color="#ffd04b">
      <div v-for="(item,index) in menuList" :index="index">
        <el-submenu v-if="item.items && item.items.length > 0" :index="index" class="menu_submenu">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{item.name}}</span>
          </template>
          <el-menu-item :index="index + '-' + i" :route="k.path" v-for="(k,i) in item.items">
            {{k.name}}
          </el-menu-item>
        </el-submenu>
        <el-menu-item :index="index" :route="item.path" v-else>
          <i class="el-icon-menu"></i>
          <span slot="title">{{item.name}}</span>
        </el-menu-item>
      </div>
    </el-menu>
  </div>
</template>

<script>
  import { menuList } from '../static/menuData'
  export default {
    data() {
      return {
        menuList,
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
  .menu_contain {
    width: 220px;
    min-height: calc(100vh - 64px - 1em);
    background-color: #545c64;
  }
  .menu_submenu {
    text-align: left;
  }
  .el-menu-item {
    text-align: left;
  }
  .el-menu-vertical-demo {
    width:100%;
  }
</style>
