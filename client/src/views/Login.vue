<template>
  <div class="hero is-info is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-4">
            <div id="tab-content">
              <div id="login-content">
                <form class="box" @submit.prevent="login()">
                  <div class="field">
                    <label class="label"> Email </label>
                    <div class="control has-icons-left">
                      <input
                        type="text"
                        class="input"
                        placeholder="@example"
                        v-model="email"
                      />
                      <span class="icon is-small is-left">
                        <i class="fa fa-envelope"></i>
                      </span>
                    </div>
                  </div>
                  <div class="field">
                    <label class="label">Password</label>
                    <div class="control has-icons-left">
                      <input
                        type="password"
                        class="input"
                        placeholder="password123"
                        v-model="password"
                      />
                      <span class="icon is-small is-left">
                        <i class="fa fa-lock"></i>
                      </span>
                    </div>
                  </div>
                  <div class="field">
                    <label class="label">
                      <input type="checkbox" class="checkbox" />
                      Remember me
                    </label>
                  </div>
                  <div class="field">
                    <button class="button is-success">Login</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Session from "../services/session";
export default {
    data: ()=>({
        email: null,
        password: null,
        Session
    }),
    methods: {
        login(){
            this.Session.Login(this.email, this.password);
        }
    }
}
</script>

<style>
</style>