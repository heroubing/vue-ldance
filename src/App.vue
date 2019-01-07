<template>
  <div id="app">
    <!-- header -->
    <div class="nav">
      <div class="brand">
        <img class="logo" src="./assets/logo1.png" /><div class="ldance-title">李若婷舞蹈工作室</div>
      </div>
      <div class="item">
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
      <div class="contact">
        <span class="iconfont icon-msnui-telephone"></span>
        咨询热线：18746619966
      </div>
    </div>
    <!-- main -->
    <router-view/>
    <!-- footer -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  max-width: 100%;
  font-size: 14px;
  line-height: 1.5;
  background-color: #f7f7f7;
}
html body {
  min-width: 375px;
  padding: 0;
  margin: 0;
}
.nav {
  color: #273575;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3rem;
  line-height: 3rem;
  background-color: #27357513;
  border-bottom: 1px solid #27357536;
  padding: 0 10px;
}
.nav .item {
  display: flex;
}
.nav .nav-item {
  border-left: 1px solid #27357536;
  text-align: center;
  padding: 0 24px;
}
.contact {
  font-weight: normal;
  font-size: 0.9rem;
}
.last {
  border-right: 1px solid #27357536;
}
.nav-link {
  font-size: 1rem;
}
.router-link-active {
  background-color: #273575;
  color: #fff;
}
.brand {
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 1rem;
  left: 8px;
  top: 8px;
}
.logo {
  display: inline-block;
  width: 32px;
  height: 32px;
}
.ldance-title {
  margin-left: 4px;
  top: 0px;
}

/* for ipad */
@media only screen and (min-width: 506px) and (max-width: 799px) {
  .nav {
    padding-right: 0;
  }
  .nav .nav-item {
    border-left: 1px solid #27357536;
    text-align: center;
    padding: 0 16px;
  }
  .nav .nav-link {
    font-size: 0.8rem;
  }
  .ldance-title {
    font-size: 0.8rem;
  }
  .brand {
    top: 4px;
  }
  .contact {
    display: none;
  }
}
/* for phone */
@media only screen and (max-width: 505px) {
  .nav {
    line-height: 2.4rem;
    height: 2.4rem;
    padding-right: 0;
  }
  .ldance-title {
    display: none;
  }
  /* .nav {
    align-items: center;
    justify-content: flex-end;
    height: 2rem;
    line-height: 2rem;
  } */
  /* .nav .item {
    display: flex;
  } */
  .nav .nav-item {
    padding: 0 14px;
  }
  .nav .nav-link {
    font-size: 0.7rem;
  }
  .logo {
    width: 25px;
    height: 25px;
  }
  .contact {
    display: none;
  }
}
</style>
