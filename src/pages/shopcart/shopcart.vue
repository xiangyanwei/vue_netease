<template>
  <div class="shop_cart">
    <div class="shop_cart_header">
      <span class="shop_cart_title">购物车</span>
      <span class="shop_cart_ticket">领券</span>
    </div>
    <div class="shop_cart_content">
      <ul class="quality_guarantee">
        <li class="quality_guarantee_item">30天无忧退货</li>
        <li class="quality_guarantee_item">&nbsp;&nbsp;&nbsp;48小时快速退款</li>
        <li class="quality_guarantee_item">满88元免邮费</li>
      </ul>
      <div class="login_shop_cart">
        <span class="cart"></span>
        <span class="add">去添加点什么吧</span>
        <span class="login">登录</span>
      </div>
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
  @import "../../../static/css/mixin.styl"
  .shop_cart
    background-color #eee
    height (1334/$rem)
    .shop_cart_header
      background-color white
      padding 0 (20/$rem)
      height (88/$rem)
      text-align center
      font-size (32/$rem)
      line-height (88/$rem)
      .shop_cart_ticket
        float right
        margin-left -(80/$rem)
        margin-right (20/$rem)
        color darkred
    .shop_cart_content
      height (1176/$rem)
      position relative
      .quality_guarantee
        display flex
        height (70/$rem)
        .quality_guarantee_item
          font-size (24/$rem)
          line-height (70/$rem)
          flex 1
          text-align center
          position relative
          &::before
            content ''
            position absolute
            top (30/$rem)
            left (35/$rem)
            width (10/$rem)
            height (10/$rem)
            background url('./img/circle.png')

      .login_shop_cart
        middle()
        display flex
        flex-direction column
        align-items center
        justify-content center
        width (750/$rem)
        height (470/$rem)
        color #999
        text-align center
        .cart
          width (248/$rem)
          height (248/$rem)
          background url('./img/cart.png')
        .add
          margin-top  -(20/$rem)
          font-size (28/$rem)
        .login
          width (480/$rem)
          height (90/$rem)
          background-color darkred
          text-align center
          font-size (32/$rem)
          line-height (90/$rem)
          margin-top (40/$rem)
          color white
</style>
