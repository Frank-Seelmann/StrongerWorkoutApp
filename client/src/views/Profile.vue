<template>
  <div class="container is-fluid">
    <div class="columns is-centered">
      <div class="column is-half has-background-info">
        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input class="input" type="text" :placeholder="name" />
          </div>
        </div>

        <div class="field">
          <label class="label">Handle</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input is-success" type="text" :placeholder="handle" />
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check"></i>
            </span>
          </div>
        </div>

        <div class="field">
          <label class="label">Profile Pic URL</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input is-succcess" type="email" :placeholder="pic" />
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check"></i>
            </span>
          </div>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link">Submit</button>
          </div>
        </div>
      </div>

      <div class="column is-half has-background-link">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img :src="pic" alt="Profile Pic" />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img :src="pic" alt="Placeholder image" />
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">
                  {{ name }}
                </p>
                <p class="subtitle is-6">
                  {{ handle }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footwrap />
  </div>
</template>

<script>
import footwrap from "../components/FooterWrap.vue";
import { Get } from "../services/users";
import Session from "../services/session";

export default {
  name: "Profile",
  components: {
    footwrap,
  },
  data() {
    return {
      list: {},
    };
  },
  async mounted() {
    this.list = await Get(Session.user._id);
  },
  computed: {
    name() {
      return Session.user.firstName + " " + Session.user.lastName;
    },
    handle() {
      return Session.user.handle;
    },
    pic() {
      return Session.user.pic;
    },
  },
};
</script>

<style>
</style>