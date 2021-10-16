<template>
  <!-- https://www.youtube.com/watch?v=G_UcEYjib58&t=85s  -->
    <div class="hero is-info is-fullheight">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-4">
              <div class="tabs">
                <ul>
                  <li data-target="signup-content">
                    <button class="button is-primary">
                      <a>Sign Up</a>
                    </button>
                  </li>
                  <li data-target="login-content">
                    <button class="button is-light">
                      <a>Login</a>
                    </button>
                  </li>
                </ul>

              </div>
              <div id="tab-content">
                <div id="login-content">
                  <form action="" class="box">
                    <div class="field">
                      <label class="label">
                        Email
                      </label>
                      <div class="control has-icons-left">
                        <input type="email" class="input" placeholder="john@example.com">
                        <span class="icon is-small is-left">
                          <i class="fa fa-envelope"></i>
                        </span>
                      </div>
                    </div>
                    <div class="field">
                      <label class="label">Password</label>
                      <div class="control has-icons-left">
                        <input type="password" class="input" placeholder="password123">
                        <span class="icon is-small is-left">
                          <i class="fa fa-lock"></i>
                        </span>
                      </div>
                    </div>
                    <div class="field">
                      <label class="label">
                        <input type="checkbox" class="checkbox">
                        Remember me
                      </label>
                    </div>
                    <div class="field">
                      <button class="button is-success">Login</button>
                    </div>
                  </form>
                </div>

                <div id="signup-content" class="is-hidden">
                  <form action="" class="box">
                    <div class="field">
                      <label class="label">
                        Email
                      </label>
                      <div class="control has-icons-left">
                        <input type="email" class="input" placeholder="john@example.com">
                        <span class="icon is-small is-left">
                          <i class="fa fa-envelope"></i>
                        </span>
                      </div>
                    </div>
                    <div class="field">
                      <label class="label">Password</label>
                      <div class="control has-icons-left">
                        <input type="password" class="input" placeholder="password123">
                        <span class="icon is-small is-left">
                          <i class="fa fa-lock"></i>
                        </span>
                      </div>
                    </div>
                    <div class="field">
                      <label class="label">Verify Password</label>
                      <div class="control has-icons-left">
                        <input type="password" class="input" placeholder="password123">
                        <span class="icon is-small is-left">
                          <i class="fa fa-lock"></i>
                        </span>
                      </div>
                    </div>
                    <div class="field">
                      <label class="label">
                        <input type="checkbox" class="checkbox">
                        Remember me
                      </label>
                    </div>
                    <div class="field">
                      <button class="button is-success">Sign Up</button>
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
export default {
  name: 'Login',
  components: {
    
  }
}
</script>