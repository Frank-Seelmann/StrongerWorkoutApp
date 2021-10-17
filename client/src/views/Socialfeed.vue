<template>
  <div class="section">
    <h1 class="title">Feed Page</h1>
    <div class="columns">
      <div class="column is-one-third is-offset-one-third">

        <div class="post" v-for="p in posts" :key="p.src">
          <post :post="p"/> 
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import session from "../services/session";
import { GetWall } from "../services/posts";
import Post from "../components/Post.vue";

export default {
  components: { Post },
  data: () => ({
    posts: GetWall(session.user.handle),
  }),
};
</script>

<style>
</style>