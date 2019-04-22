<template>
  <div>
    <frosted-glass-container stretch="true">
      <div id="app">
        <section class="row main-view">
          <nav class="col-2">
            <navigation />
          </nav>
          <main class="col-10">
            <router-view />
          </main>
        </section>
        <footer class="row player">
          <div class="col-12">
            <player />
          </div>
        </footer>
      </div>
    </frosted-glass-container>
  </div>
</template>

<script>
import Navigation from './layouts/app/navigation/Navigation'
import Player from './layouts/app/player/Player'

export default {
  components: {
    Navigation,
    Player
  }
}
</script>

<style lang="scss" scoped>
.row,
.row > * {
  padding: 0;
  margin: 0;
}

#app {
  height: 100vh;
  width: 100vw;
  background-image: url(http://bit.ly/2gPLxZ4);
}

.main-view {
  height: 90vh;
  width: 100%;
}

.player {
  position: fixed;
  bottom: 0;
  z-index: 10;
  height: 10vh;
  width: 100%;
}
</style>
