<template>
  <div class="home">
    <!-- Cover  -->
    <section class="hero is-dark is-fullheight-with-navbar" 
    :style="{ backgroundImage: 'url(' + require('../assets/coverpic.jpg') + ')', backgroundSize: 'cover'}"
>
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Welcome to <strong>Stronger</strong>
          </h1>
          <h2 class="subtitle">
            Start getting fit today!
          </h2>
        </div>
      </div>
    </section>

    <!-- Main  -->
    <section class="section">
      <h1 class="title">Anyone can get Stronger</h1>
      <h2 class="subtitle">
        No matter your experience level, training program or expertise, you can use Stronger to record your progress and
        achieve your goals.
      </h2>

      <div class="columns">
        <div class="column">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="../assets/randomPerson1.jpg" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">Stefan Stefancik</p>
                  <p class="subtitle is-6">@sstefancik</p>
                </div>
              </div>

              <div class="content">
                <p>
                  “I’ve tried several apps over the years, and always ended up back to basic notebook, but not
                  with Stronger. Quick, easy, and based on actual experience of people who get it. Rock solid!”
                </p>
                <time datetime="2021-3-3">3 Mar 2021</time>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="../assets/randomPerson2.jpg" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">Darina Belonogova</p>
                  <p class="subtitle is-6">@daribel</p>
                </div>
              </div>

              <div class="content">
                “I’m a fan of the Stronger app. It’s the best workout tracker that’s out there on the market.”
                <br>
                <time datetime="2021-9-9">9 Sep 2021</time>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="../assets/randomPerson3.jpg" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">Andre Piacquadio</p>
                  <p class="subtitle is-6">@apiacquadio</p>
                </div>
              </div>

              <div class="content">
                “As I was getting ready for my world record attempt, I tried 10 different workout tracking
                apps! Stronger was not only the easiest to use, but I used it as my official weight tracking
                app the day I broke the record.”
                <br>
                <time datetime="2021-12-12">12 Dec 2021</time>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="../assets/randomPerson4.jpg" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">Monica Turlui</p>
                  <p class="subtitle is-6">@monicat</p>
                </div>
              </div>

              <div class="content">
                “The greatest fitness app. It's clear the makers behind this thing use it every week,
                because it is so perfect.”
                <br>
                <time datetime="2021-11-11">11 Nov 2021</time>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
    
  },
}
</script>
