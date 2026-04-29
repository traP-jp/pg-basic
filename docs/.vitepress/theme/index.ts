/// <reference types="vite/client" />
import { h } from 'vue'
import DefaultTheme from "vitepress/theme";
import ChapterTitle from './ChapterTitle.vue'

import './custom.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'doc-before': () => h(ChapterTitle),
    })
  },
}
