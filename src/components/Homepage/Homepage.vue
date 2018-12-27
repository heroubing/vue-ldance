<template>
  <div class="homepage">
    <template>
      <el-carousel :interval="3000" indicator-position="outside" :height="bannerHeight">
        <el-carousel-item class="banner-item" v-for="item in banners" :key="item.id">
          <!-- <h3>{{ item }}</h3> -->
          <img ref="imgHeight" :src="item.banner" alt="李若婷舞蹈品牌" class="banner-image">
        </el-carousel-item>
      </el-carousel>
    </template>
  </div>
</template>
<script>
export default {
  data () {
    return {
      banners: [
        {id: 0, banner: require('../../assets/images/banner1.jpg')}
        // {id: 1, banner: require('../../assets/images/banner2.jpg')},
        // {id: 2, banner: require('../../assets/images/banner3.jpg')},
        // {id: 3, banner: require('../../assets/images/banner4.jpg')}
      ],
      imgHeight: '400px'
    }
  },
  computed: {
    bannerHeight () {
      let watchHeight = this.$ref.imgHeight['0'].offsetHeight
      console.log(watchHeight)
      return '600px'
    }
  },
  mounted () {
    console.log(this.$refs)
    console.log(this.$refs.imgHeight['0'].offsetHeight)
  }
  // methods: {
  //   setSize: function () {
  //     this.imgHeight = 740 / 2560 * this.screenWidth
  //     if (this.imgHeight > 740) {
  //       this.imgHeight = 740
  //     }
  //     if (this.imgHeight < 360) {
  //       this.imgHeight = 360
  //     }
  //   }
  // },
  // mounted () {
  //   this.setSize()
  //   const that = this
  //   window.addEventListener('resize', function () {
  //     that.screenWidth = document.body.clientWidth
  //     that.setSize()
  //   }, false)
  // }
}

</script>
<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .banner-image {
    max-width: 100%;
    height: auto;
  }
</style>
