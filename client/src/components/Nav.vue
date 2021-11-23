<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="../assets/workoutemoji.png" />
      </a>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        :class="{ 'is-active': isActive }"
        @click="isActive = !isActive"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu" :class="{ 'is-active': isActive }">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/" active-class="is-active" exact>
          Stronger
        </router-link>

        <div class="navbar-item has-dropdown is-hoverable">
          <router-link
            class="navbar-item"
            to="/extracker"
            active-class="is-active"
          >
            Exercise Tracker
          </router-link>

          <div class="navbar-dropdown">
            <router-link class="navbar-item" to="/extracker">
              Exercise Tracker
            </router-link>
            <router-link class="navbar-item" to="/summary">
              Summary and Reports
            </router-link>
          </div>
        </div>

        <div class="navbar-item has-dropdown is-hoverable">
          <router-link class="navbar-item" to="/feed" active-class="is-active">
            Social
          </router-link>

          <div class="navbar-dropdown">
            <router-link class="navbar-item" to="/feed">
              Social Feed
            </router-link>
            <router-link class="navbar-item" to="/createpost">
              Create Post
            </router-link>
            <router-link class="navbar-item" to="/profile">
              Profile
            </router-link>
          </div>
        </div>

        <router-link class="navbar-item" to="/learn" active-class="is-active">
          Learn
        </router-link>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link"> More </a>

          <div class="navbar-dropdown">
            <router-link class="navbar-item" to="/about"> About </router-link>
            <hr class="navbar-divider" />
            <router-link class="navbar-item" to="/reportissue">
              Report an issue
            </router-link>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <login-badge />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import LoginBadge from "./LoginBadge";
export default {
  data() {
    return {
      isActive: false,
    };
  },
  components: {
    LoginBadge,
  },
};
</script>

<style>
</style>