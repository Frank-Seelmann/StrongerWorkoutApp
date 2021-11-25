<template>
  <div class="container">
    <h1 class="title">Sign Up</h1>
    <div class="box">
      <form class="card" @submit.prevent="$emit('add')">
        <div class="box">
          <div class="field">
            <div class="control">
              <label class="label">First Name</label>
              <input class="input" type="text" placeholder="John" />
            </div>
          </div>
          <div class="field">
            <div class="control">
              <label class="label">Last Name</label>
              <input class="input" type="text" placeholder="Smith" />
            </div>
          </div>
          <div class="field">
            <div class="control">
              <label class="label">Handle</label>
              <input class="input" placeholder="@jsmith" />
            </div>
          </div>

          <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left has-icons-right">
              <input
                class="input"
                type="email"
                placeholder="johnsmith@email.com"
                
              />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
            </div>
          </div>

          <div class="field is-grouped" id="buttons">
            <div class="control">
              <button class="button is-link">Submit</button>
            </div>
            <div class="control">
              <button class="button is-link is-light" type="reset">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>