<template>
  <div class="container">
    <section class="section">
      <h1 class="title animate__animated animate__bounceInLeft">About</h1>
      <h2 class="subtitle">
        <strong>Stronger</strong> is primarily a
        <router-link to="/extracker">fitness tracker</router-link> app. You can
        also
        <router-link to="/learn">learn new workouts!</router-link>
      </h2>
    </section>
    <foot />
  </div>
</template>

<script>
import foot from "../components/Footer.vue";

export default {
  components: {
    foot
  },
}
</script>

<style>
</style>