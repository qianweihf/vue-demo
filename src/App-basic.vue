<template>
    <div id="app">
        <el-container>
          <el-header>Header</el-header>
          <el-main>Main</el-main>
          <el-footer>Footer</el-footer>
        </el-container>
    </div>
</template>

<script>
  export default {
    name:'App'
  }
</script>

<style>
  .el-header,.el-footer {
    background-color:#B3C0D1;
    color:#333;
    text-align:center;
    line-height:60px;
    padding:0;
  }
  html, body, .el-container {
    height: 100%;
  }
</style>
