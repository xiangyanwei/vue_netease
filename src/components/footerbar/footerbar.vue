<template>
  <div class="footer_wrapper">
    <span class="tab_wrapper" @click="$router.push('/main')" :class="{on: $route.path === '/main'}">
      <span class="icon">
        <i class="iconfont icon-shouye-1"></i>
      </span>
      <span class="tab_font">
        首页
      </span>
    </span>
    <span class="tab_wrapper" @click="$router.push('/matter')" :class="{on: $route.path === '/matter'}">
      <span class="icon">
        <i class="iconfont icon-ego-box"></i>
      </span>
      <span class="tab_font">
        识物
      </span>
    </span>
    <span class="tab_wrapper" @click="$router.push('/category')" :class="{on: $route.path === '/category'}">
      <span class="icon">
        <i class="iconfont icon-fenlei"></i>
      </span>
      <span class="tab_font">
        分类
      </span>
    </span>
    <span class="tab_wrapper" @click="$router.push('/shopcart')" :class="{on: $route.path === '/shopcart'}">
      <span class="icon">
        <i class="iconfont icon-gouwuche"></i>
      </span>
      <span class="tab_font">
        购物车
      </span>
    </span>
    <span class="tab_wrapper" @click="$router.push('/profile')" :class="{on: $route.path === '/profile'}">
      <span class="icon">
        <i class="iconfont icon-geren"></i>
      </span>
      <span class="tab_font">
        个人
      </span>
    </span>

  </div>
</template>
<script>
  export default {

    data() {
      return {}
    },

    methods: {}
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../../static/css/mixin.styl"
  .footer_wrapper
    background-color white
    position fixed
    bottom 0
    left 0
    width 100%
    height (120/$rem)
    display flex
    align-items center
    .tab_wrapper
      flex 1
      display flex
      align-items center
      flex-direction column
      &.on
        span
          color #f00
      span.tab_font
        font-size (24/$rem)
      span
        .iconfont
          font-size (50/$rem)
      .icon
        margin (10/$rem) 0

</style>
