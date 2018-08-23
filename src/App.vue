<template>
  <div id="app">
    <div v-if="honePage" class="navigation" @click='toggleThemes()'>首页</div>
    <div v-else class="navigation navigation-back" @click='goBack()'>返回</div>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
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
  name: 'App',
  computed: {
    ...mapState(['isThemes','honePage'])
  },
  methods: {
    ...mapMutations(['updateThemes']),
    toggleThemes(){
      this.$store.commit('updateThemes',!this.isThemes)
    },
    goBack(){
       console.log(1);
      if (window.history.length <= 1) {

          this.$router.push({path:'/'})
          this.$store.commit('updateHomePage',true)
          return false
      } else {
          this.$router.go(-1)
      }

    }

  }
}
</script>

<style lang="scss"  type="text/css">
$global-unit:rem;
@include min-base($label:false);
.content{
  @include w(100%);
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  @include maw(640);
  @include mar(0 auto);
}
body,html{
  @include bgc(#f0f0f0);
}
.navigation{
  @include fixed((l:5%,t:2%,z:50));
  @include flcb(24,32,#887af5);
}
.navigation-back{
  @include c(red);
}
</style>
