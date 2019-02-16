<template>
  <div id="app" class="container-fluid">
    <div class="row no-gutters">
      <!-- Menu Lateral -->
      <div class="col-md-3">
        <navigation/>
      </div>
      <!-- Área Principal de Navegação -->
      <main class="col-md-9">
        <router-view />
      </main>
      <!-- Player -->
      <div class="col-md-12"></div>
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
.container-fluid {
  padding-left: 0;
  padding-right: 0;
}
</style>
