import http from '/src/http.js'
const TODOS_URL = 'https://pb-todos.glitch.me/api/todos'

http.baseUrl = TODOS_URL

export function fetchTasks() {
    return http.get()
    // return fetch(TODOS_URL).then(d => d.json())
}

export function addTask(task) {
    return http.post('', task).then(d => ({ ...task, id: d.id }))
}

export function deleteTask(task) {
    return http.delete('/' + task.id)
}

export function updateTask(task) {
    return http.put('/' + task.id, task)
}
