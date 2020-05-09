import http from '/src/http.js'
// const TODOS_URL = 'https://pb-todos.glitch.me/api/todos'
const TODOS_URL = 'http://localhost:3030'

http.baseUrl = TODOS_URL

export function fetchTasks() {
    return http.get('/todos?_sort=id&_order=desc')
    // return fetch(TODOS_URL).then(d => d.json())
}

export function addTask(task) {
    return http.post('/todos', task).then((d) => ({ ...task, id: d.id }))
}

export function deleteTask(task) {
    return http.delete('/todos/' + task.id)
}

export function updateTask(task) {
    return http.put('/todos/' + task.id, task)
}
