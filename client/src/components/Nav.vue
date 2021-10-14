<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="index.html">
                <img src="../assets/workoutemoji.png" width="80" height="70">
            </a>
            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" id="burger">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">

                <a class="navbar-item" ; href="index.html">
                    Stronger
                </a>

                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-item" ; href="extracker.html">
                        Exercise Tracker
                    </a>
                    <div class="navbar-dropdown">
                        <a class="navbar-item" ; href="extracker.html">
                            Exercise Tracker
                        </a>
                        <a class="navbar-item" ; href="summary.html">
                            Summary and Reports
                        </a>
                    </div>
                </div>

                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-item" ; href="socialfeed.html">
                        Social
                    </a>
                    <div class="navbar-dropdown">
                        <a class="navbar-item" ; href="socialfeed.html">
                            Social Feed
                        </a>
                        <a class="navbar-item" ; href="post.html">
                            Create Post
                        </a>
                        <a class="navbar-item" ; href="profile.html">
                            Profile
                        </a>
                    </div>
                </div>

                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link" ; href="learn.html">
                        Learn
                    </a>
                    <div class="navbar-dropdown">
                        <a class="navbar-item" ; href="learn.html#abs">
                            Abs
                        </a>
                        <a class="navbar-item" ; href="learn.html#arms">
                            Arms
                        </a>
                        <a class="navbar-item" ; href="learn.html#back">
                            Back
                        </a>
                        <a class="navbar-item" ; href="learn.html#chest">
                            Chest
                        </a>
                        <a class="navbar-item" ; href="learn.html#legs">
                            Legs
                        </a>
                    </div>
                </div>

                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                        More
                    </a>
                    <div class="navbar-dropdown">
                        <a class="navbar-item" ; href="about.html">
                            About
                        </a>
                        <hr class="navbar-divider">
                        <a class="navbar-item" ; href="reportissue.html">
                            Report an issue
                        </a>
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
import LoginBadge from './LoginBadge.vue'
export default {
  components: { LoginBadge },

}
</script>

<style>

</style>