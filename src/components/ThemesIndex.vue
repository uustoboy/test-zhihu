<template>
  <div>

    <div v-if="themeList.description">
        <img :src="themeList.image" />
        <p>{{themeList.description}}</p>
    </div>
    <div v-if="themeList.editors">
      主编：
      <span v-for="item in themeList.editors" :key="item.id" >
        <img :src="item.avatar">
      </span>
    </div>
    <ul class="zh-ul">
      <li :class="item.images ? 'zh-list' : 'zh-list2'" v-for="item in themeList.stories" :key="item.id" @click="Goto(item.id)">
        <p class="list-txt">
              {{ item.title }}
        </p>
        <div class="list-img" v-if="item.images">
          <img :src="item.images"/>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import {
  mapState,
  mapGetters,
  mapActions,
  mapMutations
} from 'vuex'
export default {
  name: 'ThemesIndex',
  props: {
  },
  components: {

  },
  data () {
    return {
        themeList: {}
    }
  },
  activated () {

  },
  beforeCreate () {

  },
  computed: {
     ...mapState(['honePage'])
  },
  created () {
      let id = this.$route.query.id
        this.axios.all([
        this.axios.get(`/api/4/theme/${id}`)
        ]).then(this.axios.spread((themeResp, reviewResp)=>{
        this.themeList = themeResp.data
        this.id = id
        }))
  },
  methods: {

  }

}
</script>
<style lang="scss"  type="text/css">
$global-unit:rem;

</style>
