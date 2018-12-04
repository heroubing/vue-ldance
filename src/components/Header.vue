<template>
  <div class="website-header">
    <div class="logo-brand"><img src="../assets/logo1.png" alt="李若婷舞蹈品牌" class="logo" /></div>
    <div>{{ headerTitle }}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      headerTitle: '李若婷舞蹈品牌'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.website-header {
  width: 100%;
}
.logo-brand {
  line-height: 40px;
}
.logo-brand .logo {
  width: 32px;
}
</style>
