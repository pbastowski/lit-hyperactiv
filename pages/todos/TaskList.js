import { html, repeat } from '/src/libs.js'
import store from './todo-store.js'
import OneTask from './OneTask.js'

export default props => {
    // console.log('RENDER TaskList')
    return repeat(
        store.filteredTasks,
        task => task.id,
        task =>
            html`
                <div style="padding-top: 3px; padding-bottom: 2px;">
                    ${OneTask({
                        task,
                        deleteTask: store.deleteTask,
                        updateTask: store.updateTask
                    })}
                </div>
            `
    )
}
