<template>
  <div class='contain'>
    <el-row :gutter="20">
      <el-col :span="6">
        <ColumnChain
          :title="'销售金额'"
          :subtitle="'￥'"
          :number="'8521.31'"
        />
      </el-col>
      <el-col :span="6">
        <ColumnChain
          :title="'优惠金额'"
          :subtitle="'￥'"
          :number="'10000.98'"
          :style="{backgroundColor: '#888'}"
        />
      </el-col>
      <el-col :span="6">
        <ColumnChain
          :title="'实际营收金额'"
          :subtitle="'￥'"
          :number="'1156.56'"
          :style="{backgroundColor: 'rgb(194, 131, 36)'}"
        />
      </el-col>
      <el-col :span="6">
        <ColumnChain
          :title="'交易单数'"
          :subtitle="'258'"
          :number="'单'"
          :style="{backgroundColor: 'rgb(67, 207, 124)'}"
        />
      </el-col>
    </el-row>

    <!-- <div class='section_header'>
        kkkkk
      <div><a href='http://www.baidu.com'>这是一个跳转</a></div>
    </div> -->
  </div>
</template>

<script>
import ColumnChain from '../common/ColumnChain'
export default {
  name: 'HelloWorld',
  components: {
    ColumnChain,
  }
}
</script>

<style lang="less" scoped>
  @import "../assets/less/helloword.less";
</style>
