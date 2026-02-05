<template>
  <header>
    <img src="@/assets/logo.png" alt="Логотип" width="50">
    <h1>Нейромионика</h1>
    <nav v-if="isDesktop">
      <NavbarElement
        v-for="route in navbarRoutes"
        :key="route.path"
        :route="route"
      />
    </nav>

    <RouteDropdown v-else />
  </header>
</template>

<script setup lang="ts">
import NavbarElement from '@/components/navbar-element.vue'
import RouteDropdown from '@/components/route-dropdown.vue'
import { useIsDesktop } from '@/composables/use-is-desktop'
import { navbarRoutes } from '@/router/router'

const isDesktop = useIsDesktop()
</script>

<style scoped>
h1 {
  font-size: 1.3em;
  align-self: stretch;
  display: flex;
  text-align: center;
  align-items: center;
  padding: 10px 0;
  flex: 1;
}

header {
  display: flex;
  border-bottom: 1px solid var(--border);
  padding: 10px;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
}

nav {
  display: flex;
}

@media screen and (min-width: 1000px) {
  header {
    padding: 0 20px;
    gap: 20px;
  }
}
</style>
