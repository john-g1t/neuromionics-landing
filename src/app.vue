<template>
  <NavbarHeader />
  <main ref="mainEl">
    <RouterView />
    <FooterContacts />
  </main>
</template>

<script setup lang="ts">
import { nextTick, ref, watch } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import NavbarHeader from '@/components/navbar-header.vue'
import FooterContacts from './components/footer-contacts.vue'

const route = useRoute()
const mainEl = ref<HTMLElement | null>(null)

watch(
  () => route.fullPath,
  async () => {
    await nextTick()
    mainEl.value?.scrollTo({
      top: 0,
    })
  },
)
</script>

<style scoped>
main {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  min-height: 0;
  overflow-y: scroll;
  scrollbar-color: var(--accent) var(--input);
  scrollbar-width: thin;
}
</style>
