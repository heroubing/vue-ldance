<template>
  <div class="homepage">
    <template>
      <el-carousel :interval="3000" indicator-position="outside" :height="height">
        <el-carousel-item class="banner-item" v-for="item in banners" :key="item.id">
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
        {id: 0, banner: require('../../assets/images/banner1.jpg')},
        {id: 1, banner: require('../../assets/images/banner2.jpg')},
        {id: 2, banner: require('../../assets/images/banner3.jpg')},
        {id: 3, banner: require('../../assets/images/banner4.jpg')}
      ],
      height: ''
    }
  },
  mounted () {
    var newImg = new Image()
    newImg.src = this.banners[0].banner
    newImg.onerror = () => {
      console.log('【Image loaded error】')
    }
    newImg.onload = () => {
      this.banners.banner = newImg.src
      this.height = this.$refs.imgHeight[0].clientHeight + 'px'
    }
  }
}

</script>
<style>
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .banner-item {
    text-align: center;
  }
  .banner-image {
    max-width: 100%;
    height: auto;
  }
  /* for imac */
  @media only screen and (min-width: 1160px) {

  }
  /* for macbook and ipad pro */
  @media only screen and (min-width: 800px) and (max-width: 1159px) {

  }
  /* for ipad */
  @media only screen and (min-width: 425px) and (max-width: 799px) {

  }
  /* for phone */
  @media only screen and (max-width: 424px) {

  }
</style>
