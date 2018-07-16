<template>
  <div>
    <div class="a">
      <IndexList/>
    </div>
  </div>
</template>

<script>
import IndexList from './IndexList'

export default {
  name: 'AppIndex',
  components: {
    IndexList
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created () {
    this.$axios({
      method: 'get',
      url: 'https://news-at.zhihu.com/api/4/news/latest'
    }).then((res){
      console.log(res);
    });
  }

}
</script>
<style lang="scss" type="text/css">

</style>
