<template>
  <div id="app">
    <!-- <router-view/> -->
    <!-- 整体布局 -->
    <el-container>
      <!-- 网站头部导航 -->
      <el-header>
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="1">首页</el-menu-item>
          <el-submenu index="2">
            <template slot="title">课程介绍</template>
            <el-menu-item index="2-1">常规班</el-menu-item>
            <el-menu-item index="2-2">假期班</el-menu-item>
            <el-menu-item index="2-3">私教班</el-menu-item>
          </el-submenu>
          <el-menu-item index="3">品牌及资质</el-menu-item>
          <el-menu-item index="4">联系我们</el-menu-item>
        </el-menu>
      </el-header>
      <!-- 网站正文部分 -->
      <el-main>Main</el-main>
      <!-- 网站尾部版权 -->
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      activeIndex2: '1'
    }
  }
}
</script>

<style>
body, html {
  margin: 0;
  padding: 0;
}
.el-header {
  margin: 0;
  padding: 0;
}
.el-header ul {
  text-align: center;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
