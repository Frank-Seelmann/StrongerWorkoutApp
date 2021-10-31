<template>
  <div class="container is-fluid">
    <section class="section">
      <h1 class="title">Report Issues</h1>
      <h2 class="subtitle">Report any issues here!</h2>
    </section>

    <textarea class="textarea" placeholder="e.g. Hello world"></textarea>
    <div class="control">
      <button class="button is-link">Submit</button>
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