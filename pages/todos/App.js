import { html, repeat, observe, json } from '/src/libs.js'
import Header from './Header.js'
import Title from './Title.js'
import newTask from './NewTask.js'
import Filters from './Filters.js'
import TaskList from './TaskList.js'

import store from './todo-store.js'

const newTasks = observe([])

const addNewTask = () =>
    newTasks.push(new newTask()({ addTask: (v) => store.addTask(v) }))

addNewTask()

export default () => html`
    ${Header()}
    <!-- -->
    ${Title()}
    <!-- -->

    ${newTasks}

    <button @click=${addNewTask}>
        Another NewTask
    </button>
    <hr />

    <!-- -->
    <div style="background: #eee; padding: 4px 6px 0px; margin-bottom: 10px; ">
        ${Filters({ selectAll: (v) => store.selectAll(v) })}
    </div>

    <!-- Task List-->
    <div style="background: #eee; padding: 4px 6px;">
        ${TaskList()}
    </div>
`
// <hr />
// <pre>${json(store.tasks)}</pre>
