<template>
  <div id="app">
    <section class="row main-view">
      <nav class="col-2">
        Menu Lateral
      </nav>
      <main class="col-10">
        <router-view />
      </main>
    </section>
    <footer class="row player">
      <div class="col-12">
        Player Inferior
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.row {
  margin: 0;
}

#app {
  height: 100vh;
}

.main-view {
  height: 90%;
  & nav {
    background: rgb(122, 226, 186);
  }

  & main {
    background: rgb(49, 179, 129);
  }
}

.player {
  height: 10%;
  background: rgb(133, 199, 219);
}
</style>
