<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <div id="nav">
          <Nav />
          <messages/>
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import Messages from "./components/Messages.vue";

export default {
  components: {
    Nav,
    Messages
  },
};
</script>

<style>
</style>