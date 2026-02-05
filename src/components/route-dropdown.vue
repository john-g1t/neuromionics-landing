<template>
  <div class="modal-unauthorized">
    <MenuIcon v-show="!open" class="menu-icon" @click="open = !open" />
    <CloseIcon v-show="open" class="menu-icon" @click="open = !open" />
    <Transition name="fade">
      <nav v-if="open">
        <ul>
          <li
            v-for="(route) in navbarRoutes"
            :key="route.path"
            @click="open = false"
          >
            <NavbarElement
              :route="route"
              orientation="vertical"
            />
          </li>
        </ul>
      </nav>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MenuIcon from '@/assets/icons/burger.svg'
import CloseIcon from '@/assets/icons/close.svg'
import NavbarElement from '@/components/navbar-element.vue'
import { navbarRoutes } from '@/router/router'

const open = ref(false)
</script>

<style scoped>
.menu-icon {
  width: 42px;
  height: 42px;
  color: var(--text);
  padding: 5px;
  cursor: pointer;
  border-radius: 10px;
}

.menu-icon:hover {
  background-color: var(--panel);
}

.modal-unauthorized {
  display: flex;
  gap: 10px;
}

nav {
  position: absolute;
  inset: 70px 0 0 0;
  background: var(--input);
  border: var(--border) 1px solid;
  align-items: stretch;
  z-index: 10;
}

ul {
  margin: 10px;
  border-radius: 10px;
  overflow: hidden;
}

li {
  background: var(--panel);
  overflow: hidden;
}

.route-last {
  margin-bottom: 10px;
  border-radius: 0 0 10px 10px;
}

.route-first {
  border-radius: 10px 10px 0 0;
}

.theme-switch {
  margin-bottom: 10px;
  border-radius: 10px;
}

.github-link {
  border-radius: 10px;
}

li > *:first-child {
  width: 100%
}

li > *:first-child:hover {
  background: var(--panel);
}
</style>
