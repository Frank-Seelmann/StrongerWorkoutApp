<template>
  <div class="container is-fluid">
    <section class="section">
      <h1 class="title">Workout Summary</h1>
      <h2 class="subtitle">Here you see reports on how well you're doing!</h2>
    </section>

    <div class="column is-half">
      <h2 class="subtitle">Progress this Week</h2>
      <progress class="progress is-success" value="60" max="100">60%</progress>
    </div>
    <foot />
  </div>
</template>

<script>
import foot from "../components/Footer.vue";

export default {
  components: {
    foot,
  },
};
</script>

<style>
</style>