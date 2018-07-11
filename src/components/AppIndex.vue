<template>
  <div>
    <div class="a">
      111
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppIndex',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style lang="scss" type="text/css">
//@import '../assets/scss/base_mixins/_base_mixins';
.a{
  @include wh(100);
  @include bgc(blue);
}
</style>
