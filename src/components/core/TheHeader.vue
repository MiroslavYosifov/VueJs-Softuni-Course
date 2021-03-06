<template>
  <header class="site-header">
      <nav class="site-header navigation">
          <ul>
              <li>
                <router-link to="/about">about</router-link>
              </li>
              <li>
                <router-link to="/contact">contact</router-link>
              </li>
              <li>
                <router-link to="/projects">projects</router-link>
              </li>
              <li>
                <router-link to="/my-profile">my profile</router-link>
              </li>
          </ul>
      </nav>
  </header>
</template>

<script>
export default {
  props: {

  },
  computed: {

  },
  methods: {

  },
};
</script>

<style>
.site-header {
    position: fixed;
    top: 0; left: 0;
    width: 100%;
    background: rgb(185, 185, 185);
    padding: 0 2em;
}

.site-header.navigation {
}

.site-header.navigation ul {
    display: flex;
}

.site-header.navigation ul li {
    
}

.site-header.site-header.navigation ul li:first-child {
    margin-left: auto;
}

.site-header.navigation ul li a {
    display: block;
    color: gray;
    padding: 0.4em;
    font-size: 1.3em;
}

.site-header.navigation ul li .router-link-active {
    background: rgb(114, 138, 167);
    color: white;
}

.site-header.navigation ul li a:hover {
    background: rgb(114, 138, 167);
    color: white;
}
</style>
