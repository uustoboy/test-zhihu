<template>
  <div>
    <div v-show="goGack" class="back-top" @click="goBack()">返回</div>
  </div>
</template>

<script>

export default {
  name: 'BackTop',
  components: {

  },
  data () {
    return {
      goGack : false,
      scrollTop : 0
    }
  },
  activated () {

  },
  beforeCreate () {

  },
  mounted(){
    this.$nextTick(function () {
      //修改事件监听
      window.addEventListener('scroll', this.scrollToTop)

    })
  },
  created () {

  },
  methods: {
    goBack () {

      let time
      let _that = this;
      let timer = null;
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

      clearTimeout(timer)

      timer = setTimeout(function render(){

        if( _that.scrollTop > 0 ){
           _that.scrollTop -= 50
          document.body.scrollTop = document.documentElement.scrollTop = _that.scrollTop
          timer  = setTimeout(render)

        }else {
          clearTimeout(timer)
          _that.goGack = false
        }
        // window.requestAnimationFrame();


      },300);






    },
    scrollToTop(){
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      if( scrollTop > 20 ){
        this.goGack = true;
      }else{
        this.goGack = false;
      }
　　
    }
  },
  destroyed() {
    window.removeEventListener('scroll', this.scrollToTop)
  }

}
</script>
<style lang="scss"  type="text/css">
$global-unit:rem;
.back-top{
  @include fixed((r:2%,b:7%,w:60,h:60));
  @include flc(22,60,#333);
  @include bgc(yellow);
  @include bdrs(10);
  @include tac;
  @include cur;
}
</style>
