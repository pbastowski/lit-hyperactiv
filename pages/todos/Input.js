import { html } from '/src/libs.js'

export default props => html`
    <label style="display: flex; ${props.style} align-items: baseline;"
        >${props.label}
        <input type="text" .value=${props.value} style="flex-grow: 1; margin-left: 10px;"
    /></label>
`
