<template>
  <div>
      <!--<IndexList :homeList='homeList' />-->
      <router-view></router-view>
      <ThemesList :themesLists='themesList' />
      <BackTop />
  </div>
</template>

<script>
import IndexList from './IndexList'
import ThemesList from './ThemesList'
import BackTop from './BackTop'

export default {
  name: 'AppIndex',
  components: {
    IndexList,
    ThemesList,
    BackTop
  },
  data () {
    return {
      homeList: {},
      themesList: {},
      show: true
    }
  },
  beforeCreate () {

  },
  mounted () {
    // console.log(this.$el)
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
    // ...mapGetters({
    // 'fullName' : 'fullName',
    // textPlus : 'a/textPlus'
    // })
  },
  methods: {
    // ...mapActions(['updateCountAsync','a/add','b/testAction']),
    // ...mapMutations(['updateCount','a/updateText'])
  },
  created () {
    this.axios.all([

      this.axios.get(`/api/4/themes`)
    ]).then(this.axios.spread((themesResp) => {
      this.themesList = themesResp.data.others
    }))
  }

}
</script>
<style lang="scss" scoped type="text/css">

</style>
