<template>
  <div>
    <router-view/>
    <FooterBar v-if="this.$route.meta.showFooter"/>
  </div>
</template>
<script>
  import FooterBar from './components/footerbar/footerbar.vue';
  export default {
    data() {
      return {}
    },
    mounted(){
      this.$store.dispatch('getMatterMsg') ;
      this.$store.dispatch('getCategoryMsg') ;
    },
    components: {
      FooterBar
    },

    methods: {}
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
