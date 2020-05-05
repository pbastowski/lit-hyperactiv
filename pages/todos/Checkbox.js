import { html } from '/src/libs.js'

export default props => html`
    <label
        ><input type="checkbox" .checked=${props.checked} value=${props.value} />
        ${props.label}</label
    >
`
