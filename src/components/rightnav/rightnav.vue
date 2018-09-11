<template>
  <div class="right_display_wrapper">
    <div class="right_display">
      <div class="right_display_header">
        <img :src="categoryMsg.categoryL1List[currentIndex].wapBannerUrl">
      </div>
      <ul class="right_display_list">
        <li class="right_display_item" v-for="(subCateList, index) in categoryMsg.categoryL1List[currentIndex].subCateList"
        :key="index">
          <img :src="subCateList.wapBannerUrl"/>
          <span>{{subCateList.name}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll' ;
  import {mapState} from 'vuex' ;
  export default {
    props: { // 指定接收属性的属性名及属性值类型
      currentIndex: Number
    },
    computed: {
      ...mapState(['categoryMsg'])
    },
    data() {
      return {}
    },
    mounted(){
      this._initScroll('.right_display_wrapper');
    },
    methods: {
      _initScroll(selector) {
        new BScroll(selector, {
          click: true,
        })
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../../static/css/mixin.styl"
  .right_display_wrapper
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
        /*background url('./img/teachersday.png')*/
        margin-bottom (20/$rem)
        img
          width (528/$rem)
          height (192/$rem)
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
          img
            width (144/$rem)
            height (144/$rem)
            border-radius (72/$rem)
          &:nth-child(3n)
            margin-right 0
          span
            line-height (28/$rem)
            color #333
</style>
