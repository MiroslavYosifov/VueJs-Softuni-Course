<template>
    <div class="sidebar">
        <nav>
            <ul>
                <li><i @click.prevent="hideSidebar" class="fas fa-window-close"></i></li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
  props: {

  },
  computed: {

  },
  methods: {
      hideSidebar() {
        this.$store.dispatch('showHideSidebar');
      }
  },
};
</script>

<style>

.sidebar {
    padding: 5em 0;
    height: 100%;
    background: rgb(240, 240, 240);
}

.sidebar nav {
    width: 100%;
    padding: 0.1em 1em;
}

.sidebar nav ul {
    width: 100%;
}

.sidebar nav ul li:first-child {
    margin-left: auto;
}

.sidebar nav ul li {
    position: relative;
    display: block;
    width: 2em;
    cursor: pointer;
}

.sidebar nav ul li i {
    position: absolute;
    display: block;
    font-size: 3em;
    top: 50%; left: 50%;
    color: rgb(221, 98, 98);
    transform: translate(-50%, -50%);
}
</style>