/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

// 立即執行的 function
(async () => {
  const app = createApp(App)

  await registerPlugins(app)

  app.mount('#app')
})()
