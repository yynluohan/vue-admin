<template>
  <div class='menu_contain'>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <div v-for="(item,index) in menuList" :index="index">
        <el-submenu v-if="item.items && item.items.length > 0">
          <template slot="title">
            <span>{{item.name}}</span>
          </template>
          <el-menu-item :index="index + '-' + i" v-for="(k,i) in item.items">
            {{k.name}}
          </el-menu-item>
        </el-submenu>
        <el-menu-item :index="index" v-else>
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
        menuList: menuList,
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
    width: 249px;
    min-height: calc(100vh - 64px - 1em);
    background-color: #545c64;
  }
  .el-menu-vertical-demo {
    width:100%;
  }
</style>
