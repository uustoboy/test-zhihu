<template>
  <div>
      <div class="themes-main" v-if="isThemes">
        <transition name="mark">
          <div class="themes-mark" @click="close()"></div>
        </transition>
         <transition name="themes">
            <ul class="themes-ul">
              <li class="themes-list">
                首页
              </li>
              <li class="themes-list" v-for="item in themesLists" :key="item.id">
                  {{item.name}}
              </li>
            </ul>
          </transition>
      </div>
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
  name: 'ThemesList',
  props: {
    'themesLists': {}
  },
  components: {

  },
  data () {
    return {

    }
  },
  activated () {

  },
  beforeCreate () {

  },
  computed: {
    ...mapState(['isThemes'])
  },
  created () {

  },
  methods: {
    ...mapMutations(['updateThemes']),
    close(){
      this.$store.commit('updateThemes',false)
    }
  }

}
</script>
<style lang="scss"  type="text/css">
$global-unit:rem;
.themes-main{
  @include fixed((l:0,t:0,w:100%,h:100%,z:50));
}
.themes-mark{
  @include abs((l:0,t:0,w:100%,h:100%,z:30));
  @include bgc(rgba(0,0,0,0.5));
}
.themes-ul{
  @include rel;
  @include z(32);
  @include wh(80%,100%);
  @include bgc(#fff);
  .themes-list{
    @include flc(28,60,#000);
    @include tal;
    @include ti(30);
  }
}
.mark-enter-active, .mark-leave-active {
  transition: opacity 5s ease;
}
.mark-enter, .mark-leave-to /* .fade-leave-active below version 2.1.8 */ {
  @include opa(0);
  transition: opacity 5s ease;
}
.themes-enter-active, .themes-leave-active {
  transition: left 0.3s ease;
}
.themes-enter, .themes-leave-to /* .fade-leave-active below version 2.1.8 */ {
  @include l(-100%);
  transition: left 0.3s ease;
}
</style>
