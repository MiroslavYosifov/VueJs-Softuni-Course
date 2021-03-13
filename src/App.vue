<template>
<div>
<Header/>
<main class="container">
  <template v-if="getLoading">
    <Spinner/>
  </template>
  
  <div class="pages-wrapper">
    <router-view></router-view>
  </div>
  <div class="sidebar-wrapper" 
    v-if="!isShowedSidebar">
    <Sidebar/>
  </div>
</main>
<SidebarNavigation />
<Footer/>
</div>
</template>
<script>

import Spinner from './components/UI/Spinner.vue';

import Header from './components/core/TheHeader.vue';
import Footer from './components/core/TheFooter.vue';
import Sidebar from './components/UI/Sidebar.vue';
import SidebarNavigation from './components/core/SidebarNavigation.vue';

export default {
    name: "App",
    components: {
      Spinner,
      Header,
      Footer,
      Sidebar,
      SidebarNavigation
    },
    data() {
      return {
    
      }
    },
    computed: {
      getLoading() {
        return this.$store.getters.getLoading;
      },
      isShowedSidebar() {
        return this.$store.getters.sidebarInfo.isShowedSidebar;
      },
    },
    methods: {
      
    },
    created() {
      this.$store.dispatch('checkIsTokenExpired');
    },
    mounted() {

    },
}

</script>

<style>

body {
  
}

.container {
  margin-top: 6em;
  display: flex;
}

.pages-wrapper {
  padding: 0 4em;
  margin-right: auto;
  width: calc(100% - var(--sidebar-width));
  /* width: calc(100% - 20em); */
}

.sidebar-wrapper {
    position: fixed;
    top: 0; left: calc(100% - var(--sidebar-width));
    height: 100vh;
    width: 20em;
    background: rgb(170, 170, 170);
    /* box-shadow: -3px 0px 3px 0px rgb(196, 196, 196); */
}

</style>