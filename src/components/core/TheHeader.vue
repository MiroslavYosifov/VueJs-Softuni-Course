<template>
  <h2>Header</h2>
  <header>
      <nav>
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

</style>
