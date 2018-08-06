<template>
  <div>
      <IndexList :homeList='homeList' />
      <ThemesList :themesLists='themesList' />

  </div>
</template>

<script>
import IndexList from './IndexList'
import ThemesList from './ThemesList'
import {
  mapState,
  mapGetters,
  mapActions,
  mapMutations
} from 'vuex'
export default {
  name: 'AppIndex',
  components: {
    IndexList,
    ThemesList
  },
  data () {
    return {
      homeList: {},
      themesList: {},
      show:true
    }
  },
  beforeCreate () {

  },
  mounted() {

    // this.updateCountAsync({
    //   num : 5,
    //   time : 3000
    // })
    // this['a/updateText'](123);
    // this['a/add']();
    // this['b/testAction']();
    // let i = 1;
    // setInterval(()=>{
    //   this.$store.commit('updateCount',i++)
    // },1000)
  },
  computed: {
    // ...mapState({
    //   counter : 'count',
    //   textA : state => state.a.text,
    //   textC : state => state.c.text
    // }),
    //...mapGetters({
      //'fullName' : 'fullName',
      // textPlus : 'a/textPlus'
    //})
  },
  methods: {
    // ...mapActions(['updateCountAsync','a/add','b/testAction']),
    // ...mapMutations(['updateCount','a/updateText'])
  },
  created () {
    this.axios.all([
      this.axios.get(`/api/4/news/latest`),
      this.axios.get(`/api/4/themes`)
    ]).then(this.axios.spread((latestResp, themesResp)=>{
      this.homeList = latestResp.data.stories
      this.themesList = themesResp.data.others
    }))

  }

}
</script>
<style lang="scss" scoped type="text/css">

</style>
