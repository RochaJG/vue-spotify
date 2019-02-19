<template>
  <div id="app" class="container-fluid">
    <div id="main-row" class="row no-gutters">
      <!-- Menu Lateral -->
      <nav class="p-navbar col-md-3">
        <navigation/>
      </nav>
      <!-- Área Principal de Navegação -->
      <main class="p-main col-md-9">
        <router-view />
      </main>
      <!-- Player -->
      <footer class="p-footer col-md-12">
        rodapé
      </footer>
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/app/Nav.vue'

export default {
  components: {
    Navigation
  }
}
</script>

<style lang="scss" scoped>
#app, #main-row {
  height: 100vh;
}

.container-fluid {
  padding-left: 0;
  padding-right: 0;
}

main.p-main, nav.p-nav {
  max-height: 90vh;
  height: 90vh;
}

footer.p-footer {
  min-height: 10vh;
}
</style>
