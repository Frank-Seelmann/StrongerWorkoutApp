<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="post.src" :alt="post.alt" />
        <button class="delete" @click="$emit('remove')"></button>
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img :src="post.user.pic" alt="Placeholder image" />
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">
            {{ post.user.firstName }} {{ post.user.lastName }}
          </p>
          <p class="subtitle is-6">
            {{ post.user.handle }}
          </p>
        </div>
      </div>

      <div class="content">
        {{ post.caption }}
      </div>
    </div>
    <footer class="card-footer">
      <a href="#" class="card-footer-item">Like</a>
      <a href="#" class="card-footer-item">Comment</a>
      <a href="#" class="card-footer-item">Share</a>
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    post: Object,
  },
};
</script>

<style>
button.delete {
  position: absolute;
  top: 5px;
  right: 5px;
}
</style>