import App from './App'

import { createSSRApp } from 'vue'

import myPlugin from './plugin/ui.js'


export function createApp() {
  const app = createSSRApp(App)
  
  app.use(myPlugin)

  return {
    app
  }
}
