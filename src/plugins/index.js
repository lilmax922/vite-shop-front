/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import router from './router'
import pinia from './pinia'
import { useUserStore } from '@/stores/user'
import VImageInput from 'vue3-img-input'
import '@/styles/main.scss'

export async function registerPlugins (app) {
  loadFonts()
  app.use(pinia) // 先初始化 Pinia
  await useUserStore().getUser() // 再抓使用者資料
  app.use(router) // 再抓路由
  app.use(vuetify)
  app.component('VImageInput', VImageInput)
}
