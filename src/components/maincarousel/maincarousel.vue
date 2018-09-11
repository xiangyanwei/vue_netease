<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(cate, index) in getCarousel"
           :key="index">
        <img :src="cate.bannerUrl">
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
  import {mapState, mapGetters} from 'vuex' ;
  import Swiper from 'swiper' ;
  import 'swiper/dist/css/swiper.min.css';
  export default {
    props: { // 指定接收属性的属性名及属性值类型

    },

    data() {
      return {}
    },
    watch: {
      getCarousel(){
        this.$nextTick(()=>{
          new Swiper('.swiper-container',{
            spaceBetween: 30,
            centeredSlides: true,
            loop: true,
            observer:true,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
          })
        })
      }
    },
    computed: {
      ...mapGetters(['getCarousel'])
    },
    methods: {}
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../../static/css/mixin.styl'
  .swiper-container
    .swiper-slide
      img
        width 100%
        height (400/$rem)
</style>
