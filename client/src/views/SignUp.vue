<template>
  <div class="container">
    <h1 class="title">Sign Up</h1>
    <div class="box">
      <form class="card" @submit.prevent="submit()">
        <div class="box">
          <div class="field">
            <label class="label">First Name</label>
            <p class="control">
              <input
                class="input"
                type="text"
                placeholder="John"
                v-model="newUser.firstName"
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
                v-model="newUser.lastName"
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
                v-model="newUser.handle"
                required
              />
            </p>
          </div>
          <div class="field">
            <label class="label">Email</label>
            <p class="control">
              <input
                class="input"
                type="email"
                placeholder="johnsmith@email.com"
                v-model="newUser.email"
                required
              />
            </p>
          </div>
          <div class="field">
            <label class="label">Password</label>
            <p class="control">
              <input
                class="input"
                type="password"
                placeholder="password123"
                v-model="newUser.password"
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
                v-model="newUser.pic"
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
    </div>
  </div>
</template>

<script>
import router from "../router";
import { Add } from "../services/users";

export default {
  data: () => ({
    newUser: {
      firstName: null,
      lastName: null,
      handle: null,
      password: null,
      email: null,
      pic: null,
      isAdmin: true,
    },
  }),
  methods: {
    async submit() {
      const response = await Add(this.newUser);
      if (response) {
        router.push("/login");
      }
    },
  },
};
</script>

<style>
</style>