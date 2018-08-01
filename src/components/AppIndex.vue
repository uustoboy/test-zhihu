<template>
  <div>
    <div class="a">
      <IndexList :homeList='homeList' :msg='msg' />
    </div>
  </div>
</template>

<script>
import IndexList from './IndexList'
import axios from 'axios'
export default {
  name: 'AppIndex',
  components: {
    IndexList
  },
  data () {
    return {
      homeList: {},
      msg: 'Welcome to Your Vue.js App'
    }
  },
  beforeCreate () {

  },
  created () {
    axios.get('/api/4/news/latest').then((res) => {
      if(res.status == 200) {
        this.homeList = res.data.stories;
        console.log(typeof res.data.stories);
      }
    })
  }

}
</script>
<style lang="scss" type="text/css">

</style>
