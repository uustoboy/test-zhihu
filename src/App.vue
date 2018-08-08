<template>
  <div id="app">
    <div class="navigation" @click='toggleThemes()'>首页</div>
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
    ...mapState(['isThemes'])
  },
  methods: {
    ...mapMutations(['updateThemes']),
    toggleThemes(){
      this.$store.commit('updateThemes',!this.isThemes)
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
</style>
