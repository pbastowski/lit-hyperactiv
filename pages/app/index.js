// import { render, computed, dispose, LitElement, html } from '/src/libs.js'
import { render, computed } from '/src/libs.js'
import App from './App.js'
import { loadStore } from '/src/store.js'

// loadStore()

computed(() => {
    console.time('± render')
    render(App(), window.app)
    console.timeEnd('± render')
})

// let template = App()

// customElements.define(
//     'my-app',
//     class extends LitElement {
//         $$destroy_store = computed(() => {
//             this.template = App()
//             this.requestUpdate()
//         })

//         render() {
//             return this.template
//         }

//         disconnectedCallback = () => dispose(this.$$destroy_store)
//     }
// )
