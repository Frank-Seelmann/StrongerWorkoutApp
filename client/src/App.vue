<template>
  <div class="container">
    <Nav />
    <h1>Huh?</h1>
    <router-view/>
  </div>
  
</template>

<script>
import Nav from './components/Nav.vue';

export default {
  components: {
    Nav
  }
}
</script>
