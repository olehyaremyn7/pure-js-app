class PostsService {
    constructor(baseUrl) {
        this.url = baseUrl
    }

    async fetch() {
        try {
            const request = new Request(`${this.url}/posts.json`, {
                method: 'GET'
            })
            return useRequest(request)
        } catch (e) {
            console.log(e)
        }
    }

    async fetchById(id) {
        try {
            const request = new Request(`${this.url}/posts/${id}.json`, {
                method: 'GET'
            })
            return useRequest(request)
        } catch (e) {
            console.log(e)
        }
    }

    async create(post) {
        try {
            const request = new Request(this.url + '/posts.json', {
                method: 'POST',
                body: JSON.stringify(post)
            })
            return useRequest(request)
        } catch (e) {
            console.log(e)
        }
    }
}

async function useRequest(request) {
    const response = await fetch(request)
    return await response.json()
}

export const apiService = new PostsService('https://js-note-app.firebaseio.com')
