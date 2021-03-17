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
    v-if="!isShowedSidebar && auth">
    <Sidebar/>
  </div>
</main>
<div v-if="auth">
  <SidebarNavigation />
</div>
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
      auth() {
        return this.$store.getters.isAuthenticated;
      },
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
  min-height: 100vh;
  /* margin-top: 6em; */
  display: flex;
}

.pages-wrapper {
  padding: 0 4em;
  margin-top: 6em;
  margin-bottom: 4em;
  margin-right: auto;
  width: calc(100% - var(--sidebar-width));
  /* width: calc(100% - 20em); */
}

.sidebar-wrapper {
    position: fixed;
    top: 0; left: calc(100% - var(--sidebar-width));
    height: 100vh;
    width: 20em;
    background: rgb(240, 240, 240)
}

</style>