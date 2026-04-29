<script setup lang="ts">
import { computed } from 'vue'
import { useData, useRoute } from 'vitepress'
import type { DefaultTheme } from 'vitepress'

const { theme } = useData()
const route = useRoute()

function normalize(path: string): string {
  return path.replace(/\/$/, '')
}

function findInItems(items: DefaultTheme.SidebarItem[], path: string): boolean {
  return items.some(item => {
    if (normalize(item.link ?? '') === path) return true
    if (item.items) return findInItems(item.items, path)
    return false
  })
}

const chapterTitle = computed(() => {
  const path = normalize(route.path)
  const sidebar = theme.value.sidebar as Record<string, DefaultTheme.SidebarItem[]>

  const sidebarKey = Object.keys(sidebar).find(key =>
    path.startsWith(normalize(key))
  )
  if (!sidebarKey) return null

  for (const section of sidebar[sidebarKey]) {
    if (!section.items) continue
    if (findInItems(section.items, path)) return section.text
  }
  return null
})
</script>

<template>
  <p v-if="chapterTitle" class="chapter-title">{{ chapterTitle }}</p>
</template>

<style scoped>
.chapter-title {
  font-size: 0.85em;
  font-weight: 500;
  color: var(--vp-c-brand-1);
  margin: 0 0 0.25rem;
}
</style>
