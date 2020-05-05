export default {
    baseUrl: '',

    get(api = '', opt = {}) {
        return fetch(this.baseUrl + api, opt).then(d => {
            if (d.status < 200 || d.status > 299) throw new Error(d.status)
            else return d.json()
        })
    },

    post(
        api,
        data,
        opt = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }
    ) {
        return fetch(this.baseUrl + api, {
            ...opt,
            body: JSON.stringify(data)
        }).then(d => {
            if (d.status < 200 || d.status > 299) throw new Error(d.status)
            else return d.json()
        })
    },

    put(
        api,
        data,
        opt = {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }
    ) {
        return fetch(this.baseUrl + api, {
            ...opt,
            body: JSON.stringify(data)
        }).then(d => {
            if (d.status < 200 || d.status > 299) throw new Error(d.status)
            else return d.json()
        })
    },

    delete(
        api,
        opt = {
            method: 'DELETE'
        }
    ) {
        return fetch(this.baseUrl + api, {
            ...opt
        }).then(d => {
            if (d.status < 200 || d.status > 299) throw new Error(d.status)
            else return d.json()
        })
    }
}
