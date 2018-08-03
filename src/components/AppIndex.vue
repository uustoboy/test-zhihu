<template>
  <div>
      <IndexList :homeList='homeList' />
      <ThemesList :themesList='themesList' :themesShow='' />
  </div>
</template>

<script>
import IndexList from './IndexList'
import ThemesList from './ThemesList'
import axios from 'axios'
export default {
  name: 'AppIndex',
  components: {
    IndexList,
    ThemesList
  },
  data () {
    return {
      homeList: {},
      themesList: {}
    }
  },
  beforeCreate () {

  },
  methods () {

  },
  created () {
    axios.all([
      axios.get(`/api/4/news/latest`),
      axios.get(`/api/4/themes`)
    ]).then(axios.spread((latestResp, themesResp)=>{
      this.homeList = latestResp.data.stories
      this.themesList = themesResp.data.others
    }))

    // axios.get('/api/4/news/latest').then((res) => {
    //   if (res.status === 200) {
    //     this.homeList = res.data.stories
    //   }
    // })
  }

}
</script>
<style lang="scss" scoped type="text/css">

</style>
