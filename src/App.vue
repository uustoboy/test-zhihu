<template>
  <div id="app">
    <div class="navigation" @click="toggleShow">首页</div>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
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
}
body,html{
  @include bgc(#f0f0f0);
}
.navigation{
  @include fixed((l:5%,t:2%,z:10));
  @include flcb(24,32,#887af5);
}
</style>
