<template>
  <div id="app">
    <!-- header -->
    <div class="nav">
      <div class="brand"><img class="logo" src="./assets/logo1.png" /><span class="ldance-title">李若婷舞蹈工作室</span></div>
      <router-link tag="div" class="nav-item" to="/Homepage">
        <span class="nav-link">首页</span>
      </router-link>
      <router-link tag="div" class="nav-item" to="/Courses">
        <span class="nav-link">课程介绍</span>
      </router-link>
      <router-link tag="div" class="nav-item" to="/BrandInfo">
        <span class="nav-link">品牌及资质</span>
      </router-link>
      <router-link tag="div" class="nav-item last" to="/Contact">
        <span class="nav-link">联系我们</span>
      </router-link>
    </div>
    <!-- main -->
    <router-view/>
    <!-- footer -->
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
    }
  },
  methods: {
  },
  components: {
  }
}
</script>

<style>
body {
  max-width: 100%;
  font-size: 1.2rem;
  line-height: 1.5;
  background-color: #f7f7f7;
}
html body {
  padding: 0;
  margin: 0;
}
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */
.nav {
  color: #273575;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  line-height: 3rem;
  background-color: #27357513;
  border-bottom: 1px solid #27357536;
}
.nav .nav-item {
  border-left: 1px solid #27357536;
  text-align: center;
  padding: 0 18px;
}
.last {
  border-right: 1px solid #27357536;
}
.nav-link {
  font-size: 1rem;
  padding-bottom: 1rem;
}
.router-link-active {
  background-color: #273575;
  color: #fff;
}
.brand {
  font-weight: 400;
  font-size: 1rem;
  text-align: center;
  line-height: 3rem;
  float: left;
  position: fixed;
  left: 8px;
  top: 8px;
}
.logo {
  width: 32px;
}
.ldance-title {
  margin-left: 4px;
  position: fixed;
  top: 0px;
}
</style>
