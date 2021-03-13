<template>
    <nav v-if="isShowedSidebar" class="sidebar-navigation">
        <ul>
            <li @click.prevent="showSidebar"><i class="fas fa-bars"></i></li>
            <!-- <li><i class="fas fa-bars"></i></li> -->
        </ul>
    </nav>
</template>

<script>
export default {
  props: {

  },
  computed: {
    isShowedSidebar() {
      return this.$store.getters.sidebarInfo.isShowedSidebar;
    }
  },
  methods: {
      showSidebar () {
        this.$store.dispatch('showHideSidebar');
      }
  },
};
</script>

<style>
.sidebar-navigation {
    position: fixed;
    top: 10%; right: 0.3em;
}

.sidebar-navigation ul {
    display: flex;
    flex-wrap: wrap;
    width: 3.4em;
}

.sidebar-navigation ul li {
    position: relative;
    width: 3.4em;
    height: 3.4em;
    margin-top: 1em;
    border-radius: 0.1em;
    box-shadow: 0 4px 5px rgb(189, 189, 189);
    background: rgb(204, 204, 204);
    cursor: pointer;
}

.sidebar-navigation ul li i {
    position: absolute;
    display: block;
    font-size: 2.4em;
    top: 50%; left: 50%;
    color: gray;
    transform: translate(-50%, -50%);
}

.sidebar-navigation ul li:hover,
.sidebar-navigation ul li:hover i {
     background: rgb(182, 182, 182);
     color: gray;
}

</style>
