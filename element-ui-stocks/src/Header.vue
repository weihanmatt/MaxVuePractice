<template>
  <el-row>
    <el-col :span="24">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="Stocks" name="first"><app-stocks></app-stocks></el-tab-pane>
        <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿111</el-tab-pane>
    </el-tabs>
    </el-col>
  </el-row>
</template>

<script>
  import Stocks from './components/stocks/Stocks.vue'
  export default {
      components:{
          appStocks: Stocks
      }
  }

</script>
