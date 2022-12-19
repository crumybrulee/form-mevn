<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <router-link to="/profile">Profile</router-link>
  </nav> -->
  <router-view/>
  
</template>

<style src="./assets/bootstrap-5.0.2/dist/css/bootstrap.min.css" lang="css">
</style>
<script>
export default {
  mounted() {
    const plugin = document.createElement("script");
    plugin.setAttribute(
      "src",
      "./assets/bootstrap-5.0.2/dist/js/bootstrap.bundle.min.js'"
    );
    plugin.async = true;
    document.head.appendChild(plugin);
  }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
