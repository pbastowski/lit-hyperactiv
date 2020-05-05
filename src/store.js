// Global reactive state
import { observe, router, html } from '/src/libs.js'

const state = {
    abc: 123
}

const store = observe(
    {
        state,
        route: {},
        two_outlet: { view: () => {} }
    },
    { bind: true, deep: true }
)

export default store

// For playing and debugging only
window.store = store

// Add the current route info to the store
// and update it on every change of route.
router
    .onEnter(r => {
        store.route = router.getContext().lastRoute
    })
    .listen()

// Preserve the current store state in sessionStorage
export const loadStore = () => {
    if (sessionStorage.store) store.state = JSON.parse(sessionStorage.store)
}

export const Link = (href, label, _saveStore = false) => {
    return html`
        <a
            .href=${href}
            @click=${e => {
                console.log(JSON.stringify(store.state))
                sessionStorage.store = JSON.stringify(store.state)
            }}
            >${label}</a
        >
    `
}
