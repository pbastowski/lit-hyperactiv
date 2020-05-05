import { html, repeat } from '/src/libs.js'
import { bind } from '/src/bind.js'
import Checkbox from './Checkbox.js'

import store from './todo-store.js'

export default props => html`
    <div style="display: flex; justify-content: space-between; align-items: baseline;">
        <input
            @change=${e => props.selectAll(e.target.checked)}
            type="checkbox"
            style="margin-right: 10px;"
        />

        <span>
            ${repeat(['all', 'active', 'done'], value =>
                Checkbox({ checked: bind(store, 'show'), value, label: value })
            )}
        </span>

        <span />
    </div>
`
