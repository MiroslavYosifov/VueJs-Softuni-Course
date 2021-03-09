<template>
  <header class="site-header">
      <nav class="site-header navigation">
          <ul>
              <li>
                <router-link to="/about">About</router-link>
              </li>
              <li>
                <router-link to="/contact">Contact</router-link>
              </li>
              <li>
                <router-link to="/projects">Projects</router-link>
              </li>
              <li v-if="auth">
                <router-link to="/my-profile">{{userInfo.username}}</router-link>
              </li>
              <template v-if="!auth">
                <li>
                  <router-link to="/signin">Sign In</router-link>
                </li>
                 <li>
                  <router-link to="/signup">Sign Up</router-link>
                </li>
              </template>
              <li v-if="auth">
                <button class="logout" @click="onLogout">Logout</button>
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
    auth() {
      return this.$store.getters.isAuthenticated;
    },
    userInfo() {
      return this.$store.getters.userInfo;
    }
  },
  methods: {
    onLogout() {
      this.$store.dispatch('logout');
    }
  },
};
</script>

<style>
.site-header {
    position: fixed;
    top: 0; left: 0;
    width: 100%;
    background: rgb(154, 167, 184);
    padding: 0 2em;
}

.site-header.navigation {
}

.site-header.navigation ul {
    display: flex;
    align-items: baseline;
}

.site-header.navigation ul li {
    
}

.site-header.site-header.navigation ul li:first-child {
    margin-left: auto;
}

.site-header.navigation ul li a {
    display: block;
    color: rgb(245, 238, 225);
    padding: 0.4em;
    font-size: 1.3em;
}

.site-header.navigation ul li .router-link-active {
    background: rgb(114, 138, 167);
    color: rgb(245, 238, 225);
}

.site-header.navigation ul li a:hover {
    background: rgb(114, 138, 167);
    color: rgb(236, 229, 216);
}

.logout {
  padding: 0.6em;
  height: 100%;
  font-size: 1.3em;
  color: rgb(245, 238, 225);
  display: block;
  background: transparent;
  border: none;
  cursor: pointer;
}

.logout:hover {
    background: rgb(114, 138, 167);
    color: rgb(236, 229, 216);
}

</style>
