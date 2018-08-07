<template>
  <div>
    <div class="back-top" @click="goBack()">返回</div>
  </div>
</template>

<script>

export default {
  name: 'BackTop',
  components: {

  },
  data () {
    return {

    }
  },
  activated () {

  },
  beforeCreate () {

  },
  mounted(){
    window.addEventListener('scroll', this.scrollToTop)
  },
  created () {

  },
  methods: {
    goBack () {

    },
    scrollToTop(){
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      if( scrollTop > 20 ){

      }
　　   console.log(scrollTop)
    }
  }

}
</script>
<style lang="scss"  type="text/css">
$global-unit:rem;
.back-top{
  @include fixed((r:2%,b:2%,w:60,h:60));
  @include flc(22,60,#333);
  @include bgc(yellow);
  @include bdrs(10);
  @include tac;
}
</style>
