<template>
<div>
<Header/>

<main class="container">
  <div class="pages-wrapper">
    <router-view></router-view>
  </div>
  <div class="sidebar-wrapper" 
    v-if="!this.$store.getters.sidebarInfo.isShowedSidebar">
    <Sidebar/>
  </div>
</main>
<SidebarNavigation />
<Footer/>
</div>
</template>
<script>

import Header from './components/core/TheHeader.vue';
import Footer from './components/core/TheFooter.vue';
import Sidebar from './components/UI/Sidebar.vue';
import SidebarNavigation from './components/core/SidebarNavigation.vue'
;
export default {
    name: "App",
    components: {
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
      isShowedSidebar() {
        return this.$store.getters.sidebarInfo.isShowedSidebar;
      }
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
  padding: 0 6em;
  margin-right: auto;
  width: 100%;
  /* width: calc(100% - 20em); */
}

.sidebar-wrapper {
    position: fixed;
    top: 0; left: calc(100% - 20em);
    height: 100vh;
    width: 20em;
    background: gray;
}

</style>