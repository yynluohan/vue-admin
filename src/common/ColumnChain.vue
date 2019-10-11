<template>
  <div class="column_contain" :style="style">
    <div class="column_contain_title">{{title}}</div>
    <div class="column_contain_foot">
      <span>{{subtitle}}</span>
      <span>{{number}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ColumnChain',
    props: {
      title:'',
      subtitle:'',
      number:'',
      style: {}
    }
  }
</script>

<style scoped>
  .column_contain {
    display: flex;
    flex-direction: column;
    padding: 0.5em;
    color: #fff;
    height:108px;
    border-radius: 4px;
    background-color: rgb(67, 143, 227);
    text-align: left;
  }
  .column_contain_title {
    font-size: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    flex:1;
  }

  .column_contain_foot span {
    font-size: 30px;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: inline-block;
  }
  .column_contain_foot span:first-child {
    margin-right: 0.5em;
  }
</style>
