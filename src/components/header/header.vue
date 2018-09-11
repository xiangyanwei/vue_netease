<template>
  <div class="header_wrapper">
    <div class="first_show" @click="$router.replace('/main')">
      <i class="iconfont icon-shouye-1"></i>
    </div>
    <div class="logo">
      <img src="../../../static/img/logo.png">
    </div>
    <div class="right_icon">
      <span>
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span @click="$router.replace('/shopCart')">
        <i class="iconfont icon-gouwuche"></i>
      </span>
    </div>
  </div>
</template>
<script>
  export default {
    props: { // 指定接收属性的属性名及属性值类型

    },

    data() {
      return {}
    },

    methods: {}
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../../static/css/mixin.styl'
  .header_wrapper
    position fixed
    left 0
    top 0
    z-index 5
    display flex
    width 100%
    height (88/$rem)
    align-items center
    padding 0 (20/$rem)
    box-sizing border-box
    background-color #eee
    .first_show
      flex 1
      .icon-shouye-1
        font-size (50/$rem)
    .logo
      flex 4
      text-align center
      img
        width (170/$rem)
        height (54/$rem)
    .right_icon
      flex 1
      span
        .iconfont
          font-size (52/$rem)
</style>
