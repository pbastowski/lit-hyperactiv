import { html } from '/src/libs.js'
import { Link } from '/src/store.js'

import store from './todo-store.js'

export default () => html`
    <div style="display: flex; justify-content: space-between; align-items: baseline;">
        <span>
            <a href="#" onclick="location.reload()">reload</a>
            <!-- back -->
            ${Link('/index.html', 'back', true)}
        </span>
        <span>
            ${store.activeTaskCount() &&
                html`
                    ${store.activeTaskCount()}
                    <i style="color: red;" class="mdi mdi-bell-outline"></i>
                `}
        </span>
    </div>
`

// ${store.test &&
//     html`
//         <span>${store.test[0].id}</span>
//     `}
