class IdeasService {
    #api = null;
    constructor(config) {
        this.#api = config.api;
    }

    async getIdeas() {
        let respons = await fetch(this.#api + 'get-ideas');
        let data = await respons.json();
        return data.data;
    }
    async getIdeaById(id) {
        let respons = await fetch(this.#api + 'get-idea/' + id );
        let data = await respons.json();
        return data.data; 
    }
}

export default IdeasService;