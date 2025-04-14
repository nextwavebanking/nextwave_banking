import './assets/main.css'
import './assets/semantic.css'
import './assets/base.css'
import './assets/Generic.css'

import { createApp } from 'vue'
import vClickOutside from 'v-click-outside'

// Vuetify setup
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import VueTelInput from 'vue-tel-input'
import 'vue-tel-input/vue-tel-input.css'
import App from './App.vue'

const vuetify = createVuetify({
  components,
  directives,
})

createApp(App).use(vClickOutside).use(VueTelInput).use(vuetify).mount('#app')
