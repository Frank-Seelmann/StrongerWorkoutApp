<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <div id="nav">
          <Nav />
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";

export default {
  components: {
    Nav,
  },
};
</script>