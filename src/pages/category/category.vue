<template>
  <div class="category">
    <header class="search">
      <input type="text" placeholder="搜索商品, 共13234款好物">
      <span class="icon-search">
        <i class="iconfont icon-sousuo"></i>
      </span>
    </header>
    <div class="display_wrapper">
      <div class="left_display_wrapper">
        <div class="left_display">
          <ul class="left_display_list" ref="left_nav">
            <li class="left_display_item" v-for="(category, index) in categoryMsg.categoryL1List"
            :key="index" @click="handleSelect($event, index)">{{category.name}}</li>
          </ul>
        </div>
      </div>
      <RightNav :currentIndex="currentIndex"/>
     <!-- <div class="right_display_wrapper">
        <div class="right_display">
          <div class="right_display_header"></div>
          <ul class="right_display_list">
            <li class="right_display_item">
              <img src="./img/commodity.png" >
              <span>配件第2件半价</span>
            </li>
            <li class="right_display_item">
              <img src="./img/commodity.png" >
              <span>配件第2件半价</span>
            </li>
            <li class="right_display_item">
              <img src="./img/commodity.png" >
              <span>配件第2件半价</span>
            </li>
            <li class="right_display_item">
              <img src="./img/commodity.png" >
              <span>配件第2件半价</span>
            </li>
            <li class="right_display_item">
              <img src="./img/commodity.png" >
              <span>配件第2件半价</span>
            </li>
            <li class="right_display_item">
              <img src="./img/commodity.png" >
              <span>配件第2件半价</span>
            </li>
            <li class="right_display_item">
              <img src="./img/commodity.png" >
              <span>配件第2件半价</span>
            </li>
            <li class="right_display_item">
              <img src="./img/commodity.png" >
              <span>配件第2件半价</span>
            </li>
            <li class="right_display_item">
              <img src="./img/commodity.png" >
              <span>配件第2件半价</span>
            </li>
            <li class="right_display_item">
              <img src="./img/commodity.png" >
              <span>配件第2件半价</span>
            </li>
            <li class="right_display_item">
              <img src="./img/commodity.png" >
              <span>配件第2件半价</span>
            </li>
            <li class="right_display_item">
              <img src="./img/commodity.png" >
              <span>配件第2件半价</span>
            </li>
            <li class="right_display_item">
              <img src="./img/commodity.png" >
              <span>配件第2件半价</span>
            </li>
            <li class="right_display_item">
              <img src="./img/commodity.png" >
              <span>配件第2件半价</span>
            </li>
            <li class="right_display_item">
              <img src="./img/commodity.png" >
              <span>配件第2件半价</span>
            </li>
            <li class="right_display_item">
              <img src="./img/commodity.png" >
              <span>配件第2件半价</span>
            </li>
            <li class="right_display_item">
              <img src="./img/commodity.png" >
              <span>配件第2件半价</span>
            </li>
            <li class="right_display_item">
              <img src="./img/commodity.png" >
              <span>配件第2件半价</span>
            </li>
            <li class="right_display_item">
              <img src="./img/commodity.png" >
              <span>配件第2件半价</span>
            </li>
          </ul>
        </div>
      </div>-->
    </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll' ;
  import {mapState} from 'vuex' ;
  import RightNav from '../../components/rightnav/rightnav.vue' ;
  export default {
    props: { // 指定接收属性的属性名及属性值类型

    },

    data() {
      return {
        currentIndex: 0
      }
    },
    computed: {
      ...mapState(['categoryMsg'])
    },
    components: {
      RightNav
    },
    mounted() {
      this._initScroll('.left_display_wrapper');
      this.$refs.left_nav.children[0].className = 'left_display_item active'
    },

    methods: {
      _initScroll(selector) {
        new BScroll(selector, {
          click: true,
        })
      },
      handleSelect(event, index){
        Array.from(this.$refs.left_nav.children).forEach((item, index) =>{
          item.className = 'left_display_item'
        })
        event.target.className = 'left_display_item active' ;
        this.currentIndex = index ;
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../../static/css/mixin.styl"
  .category
    position relative
    .search
      position fixed
      top 0
      left 0
      background-color white
      height (88/$rem)
      text-align center
      border-bottom 1px solid #ddd
      z-index 5
      input
        vertical-align middle
        padding-left (180/$rem)
        box-sizing border-box
        width 90%
        height (56/$rem)
        outline none
        border none
        margin-top (18/$rem)
        background-color #eee
        border-radius (10/$rem)
        &::-webkit-input-placeholder
          font-size  (32/$rem)
          color #333
      span
        position absolute
        top (22/$rem)
        left (160/$rem)
        .icon-sousuo
          font-size (40/$rem)
    .display_wrapper
      margin-top (89/$rem)
      clearFix()
      .left_display_wrapper
        float left
        height (1125/$rem)
        .left_display
          width (162/$rem)
          font-size (32/$rem)
          box-sizing border-box
          border-right 1px solid #eee
          .left_display_list
            .left_display_item
              text-align center
              padding (10/$rem)
              margin-top (40/$rem)
              width (162/$rem)
              &.active
                border-left (3/$rem) solid darkred
                color darkred
                width (162/$rem)
                box-sizing border-box
      /*.right_display_wrapper
        float right
        height (1245/$rem)
        .right_display
          float right
          width (528/$rem)
          padding (30/$rem)
          margin-bottom (120/$rem)
          .right_display_header
            width (528/$rem)
            height (192/$rem)
            background url('./img/teachersday.png')
            margin-bottom (20/$rem)
          .right_display_list
            clearFix()
            .right_display_item
              width (144/$rem)
              text-align center
              float left
              display flex
              flex-direction column
              align-items center
              font-size (24/$rem)
              margin-right (34/$rem)
              &:nth-child(3n)
                margin-right 0
              span
                line-height (28/$rem)
                color #333*/
</style>
