import { html } from '/src/libs.js'
import { Link } from '/src/store.js'

export default () => html`
    <a href="#" onclick="location.reload()">reload</a>
    ${Link('/pages/todos/index.html', 'todos', true)}
`
