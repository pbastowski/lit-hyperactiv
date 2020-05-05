import { html, repeat, observe, json } from '/src/libs.js'
import Header from './Header.js'
import Title from './Title.js'
import newTask from './NewTask.js'
import Filters from './Filters.js'
import TaskList from './TaskList.js'

import store from './todo-store.js'

const NewTask = new newTask()
const NewTask2 = () => {} //new newTask()

const newTasks = observe([])

export default () => html`
    ${Header()}
    <!-- -->
    ${Title()}
    <!-- -->

    ${NewTask({ addTask: v => store.addTask(v) })}
    ${NewTask2({ addTask: v => store.addTask(v) })}

    <!-- -->
    ${newTasks}

    <button
        @click=${() => newTasks.push(new newTask()({ addTask: v => store.addTask(v) }))}
    >
        Another NewTask
    </button>
    <hr />

    <!-- -->
    <div style="background: #eee; padding: 4px 6px 0px; margin-bottom: 10px; ">
        ${Filters({ selectAll: v => store.selectAll(v) })}
    </div>

    <!-- Task List-->
    <div style="background: #eee; padding: 4px 6px;">
        ${TaskList()}
    </div>
`
// <hr />
// <pre>${json(store.tasks)}</pre>
