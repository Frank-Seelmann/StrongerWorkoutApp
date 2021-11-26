<template>
  <div class="container is-fluid">
    <div class="columns is-centered">
      <div class="column is-half has-background-info">
        <form class="card" @submit.prevent="submit()">
        <div class="box">
          <div class="field">
            <label class="label">First Name</label>
            <p class="control">
              <input
                class="input"
                type="text"
                placeholder="John"
                v-model="userUpdate.firstName"
                required
              />
            </p>
          </div>
          <div class="field">
            <label class="label">Last Name</label>
            <p class="control">
              <input
                class="input"
                type="text"
                placeholder="Smith"
                v-model="userUpdate.lastName"
                required
              />
            </p>
          </div>
          <div class="field">
            <label class="label">Handle</label>
            <p class="control">
              <input
                class="input"
                type="text"
                placeholder="@jsmith"
                v-model="userUpdate.handle"
                required
              />
            </p>
          </div>
          <div class="field">
            <label class="label">Profile Pic</label>
            <p class="control">
              <input
                class="input"
                type="url"
                placeholder="url of image"
                v-model="userUpdate.pic"
                required
              />
            </p>
          </div>
          <div class="field is-grouped" id="buttons">
            <div class="control">
              <button class="button is-link">Submit</button>
            </div>
            <div class="control">
              <button class="button is-link is-light" type="reset">
                Clear
              </button>
            </div>
          </div>
        </div>
      </form>
      <div class="card">
        <p><strong>Refresh</strong> and login in again to view changes!</p>
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
                <p class="title is-4">{{ firstName }} {{ lastName }}</p>
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
import { Update } from "../services/users";
import Session from "../services/session";
import router from "../router";

export default {
  components: {
    footwrap,
  },
  data: () => ({
    userUpdate: {
      firstName: null,
      lastName: null,
      handle: null,
      pic: null,
    },
  }),
  computed: {
    firstName() {
      return Session.user.firstName;
    },
    lastName() {
      return Session.user.lastName;
    },
    handle() {
      return Session.user.handle;
    },
    pic() {
      return Session.user.pic;
    },
  },
  methods: {
    async submit() {
      console.log(Session.user._id)
      console.log(this.userUpdate.firstName)
      const response = await Update(Session.user._id, this.userUpdate);
      if (response) {
        router.push("/profile");
      }
    },
  },
};
</script>

<style>
</style>