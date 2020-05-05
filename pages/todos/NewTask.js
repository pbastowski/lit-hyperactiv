import { html, observe } from '/src/libs.js'
import { bind } from '/src/bind.js'
import Input from './Input.js'

export default function() {
    // console.log('NewTask: CREATE')
    const state = observe({ text: '' })

    return props => html`
        <form
            style="display: flex; justify-content: space-between; align-items: baseline;"
            @submit=${e => e.preventDefault()}
        >
            ${Input({
                value: bind(state, 'text', { event: 'change' }),
                label: 'What next',
                style: 'flex-grow: 1; margin-right: 10px;'
            })}

            <button
                Xdisabled=${!state.text.trim()}
                @click=${() => {
                    const t = state.text.trim()
                    if (t) {
                        props.addTask(t)
                        state.text = ''
                    }
                }}
            >
                Add Task
            </button>
        </form>
    `
}

/*
<input
                .value=${bind(state, 'text')}
                style="flex-grow: 1; margin-right: 10px;"
            />
*/
