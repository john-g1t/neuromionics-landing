<template>
  <RouterLink
    :to="route.path"
    class="link" :class="[orientation]"
    active-class="active"
    draggable="false"
  >
    {{ route.name }}
  </RouterLink>
</template>

<script setup lang="ts">
import type { RouteRecordRaw } from 'vue-router'

defineProps<{
  route: RouteRecordRaw
  orientation?: 'horizontal' | 'vertical'
}>()
</script>

<style scoped>
.link {
  padding: 16px 18px;
  text-decoration: none;
  color: var(--text);
  font-size: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 2px solid transparent;
  border-bottom: 2px solid transparent;
  user-select: none;
  border-radius: 12px;
  transition: background 0.2s ease, transform 0.2s ease, border-bottom-color 0.2s ease;
}

.vertical {
  border: none;
  justify-content: flex-start;
  padding: 12px;
}

.link:hover {
  border-bottom-color: var(--border-hover);
  background: var(--panel);
  transform: translateY(-1px);
}

.active {
  border-bottom-color: var(--text);
  background: rgba(68, 160, 225, 0.12);
}

.active:hover {
  border-bottom-color: var(--text);
  background: rgba(68, 160, 225, 0.12);
}

.logo {
  width: 20px;
  height: 20px;
  color: var(--text);
  margin-right: 16px;
}
</style>
