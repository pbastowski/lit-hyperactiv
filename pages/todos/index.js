import '@mdi/font/css/materialdesignicons.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '/src/index.scss'

import { render, computed } from '/src/libs.js'
import App from './App.js'
import { loadStore } from '/src/store.js'

// loadStore()

computed(() => {
    console.time('± render')
    render(App(), window.app)
    console.timeEnd('± render')
})
