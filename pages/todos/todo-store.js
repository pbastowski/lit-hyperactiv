import { observe, computed } from '/src/libs.js'

import * as api from './todos.service.js'

const store = observe(
    {
        show: 'active',

        tasks: [
            { id: 1, title: '1', done: true },
            { id: 2, title: '2', done: false },
            { id: 3, title: '3', done: false }
        ],

        test: [
            { id: 1, title: '1', done: true },
            { id: 2, title: '2', done: false },
            { id: 3, title: '3', done: false }
        ],

        async fetchTasks() {
            this.tasks = await api.fetchTasks()
        },

        async addTask(title) {
            const task = { id: 10000, title, done: false }
            // const oldTasks = this.tasks
            this.tasks = [task, ...this.tasks]
            api.addTask({ title, done: false })
                .then(t => (task.id = t.id))
                .catch(() => {
                    this.tasks = this.tasks.filter(t => t.id !== 10000)
                })
        },

        async updateTask(task) {
            await api.updateTask(task)
        },

        deleteTask(task) {
            const tasks = this.tasks
            this.tasks = this.tasks.filter(t => t.id !== task.id)
            api.deleteTask(task).catch(er => {
                console.log(er, ". Can't delete right now")
                this.tasks = tasks
            })
        },

        selectAll(done) {
            console.time('± selectAll')

            // Don't mutate individual props in a large array of objects
            // as that will result in many renders.
            // this.filteredTasks.forEach(i => (i.done = done))

            // For speed always replace the existing object with a new copy
            const tasks = JSON.parse(JSON.stringify(this.tasks))
            this.filteredTasks.forEach(i => {
                tasks.find(t => t.id === i.id).done = done
            })

            console.timeEnd('± selectAll')
            this.tasks = tasks
        },

        get filteredTasks() {
            console.time('± filteredTasks')
            const tasks = this.tasks.filter(t =>
                this.show === 'active' ? !t.done : this.show === 'done' ? t.done : true
            )
            console.timeEnd('± filteredTasks')
            return tasks
        },
        set filteredTasks(v) {
            console.log('!!!', v)
        },

        activeTaskCount() {
            return this.tasks.filter(t => !t.done).length
        },

        nextId() {
            return this.tasks.reduce((a, b) => (a.id > b.id ? a : b)).id + 1
        }
    },

    { deep: true, bind: true, bubble: true }
)

store.fetchTasks()

window.store = store

export default store
