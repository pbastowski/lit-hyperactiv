import { html } from '/src/libs.js'
import { bind } from '/src/bind.js'

export default props => {
    // console.log('RENDER OneTask')
    return html`
        <div
            class="one-task"
            style="display: flex; justify-content: space-between; align-items: baseline;"
            @change=${() => props.updateTask(props.task)}
        >
            <input
                .checked=${bind(props.task, 'done')}
                type="checkbox"
                style="margin-right: 10px;"
            />
            <input
                .value=${bind(props.task, 'title')}
                style="flex-grow: 1; margin-right: 10px;"
            />
            <span class="delete" @click=${() => props.deleteTask(props.task)}>🗑️</span>
        </div>
        <style>
            .one-task .delete {
                opacity: 0.2;
            }
            .one-task:hover .delete {
                opacity: 1;
            }
        </style>
    `
}

//<button @click=${bind(props}>Add Task</button>

//<button @click=${e => props.addTask(e.target.value)}>Add Task</button>
