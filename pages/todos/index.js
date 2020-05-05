import { render, computed } from '/src/libs.js'
import App from './App.js'
import { loadStore } from '/src/store.js'

// loadStore()

computed(() => {
    console.time('± render')
    render(App(), window.app)
    console.timeEnd('± render')
})
