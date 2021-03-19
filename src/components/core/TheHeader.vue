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
                <router-link :to="`/my-profile/${authUserInfo.userId}`">Hello {{authUserInfo.username}}!</router-link>
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
    authUserInfo() {
      return this.$store.getters.authUserInfo;
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
    z-index: 99999;
    top: 0; left: 0;
    width: calc(100% - var(--sidebar-width));
    padding: 0 2em;
    background: white;
    box-shadow: 0 2px 3px #ccc;
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
    color: rgb(133, 133, 133);
    padding: 0.4em;
    font-size: 1.2em;
}

.site-header.navigation ul li .router-link-active {
    background: rgb(153, 153, 153);
    color: rgb(255, 255, 255);
}

.site-header.navigation ul li a:hover {
    background: rgb(133, 133, 133);
    color: rgb(255, 255, 255);
}

.logout {
  padding: 0.4em;
  height: 100%;
  font-size: 1.3em;
  display: block;
  background: transparent;
  color: rgb(133, 133, 133);
  border: none;
  cursor: pointer;
}

.logout:hover {
  background: rgb(133, 133, 133);
  color: rgb(255, 255, 255);
}

</style>
