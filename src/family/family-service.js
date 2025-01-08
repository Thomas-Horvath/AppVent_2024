class FamilyService {
    #family = [];


    init() {
        let data = localStorage.getItem('appvent_family');
        if (data) this.#family = JSON.parse(data);
    }

    getAll() {
        return this.#family;
    }

    add(member) {
        member.id = this.#family.length ? this.#family[this.#family.length - 1].id + 1 : 1;
        this.#family.push(member);
        this.#save();
    }
    remove(id) {
        let x = this.#family.findIndex(item => item.id == id);
        this.#family.splice(x, 1);
        this.#save();
    }
    #save() {
        let data = JSON.stringify(this.#family);
        localStorage.setItem('appvent_family', data);
    }

}

export default FamilyService;