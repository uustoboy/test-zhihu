<template>
  <div>
      <IndexList :homeList='homeList' />
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
      homeList: {}
    }
  },
  beforeCreate () {

  },
  created () {
    axios.get('/api/4/news/latest').then((res) => {
      if (res.status === 200) {
        this.homeList = res.data.stories
      }
    })
  }

}
</script>
<style lang="scss" scoped type="text/css">

</style>
