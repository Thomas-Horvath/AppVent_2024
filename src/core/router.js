
class Router {
    defaultPath = '';
    pathDelimiter = '';
    defaultMethod = '';

    routes = {};

    constructor(config) {
        this.defaultPath = config.defaultPath;
        this.pathDelimiter = config.pathDelimiter;
        this.defaultMethod = config.defaultMethod;

        window.addEventListener('popstate', () => this.manage())  // a visszanyil kattintásra ugrik egyet vissza
    }

    register(path, classRef) {
        this.routes[path] = classRef;
        return this;
    }


    navigate(path) {
        history.pushState(null, null, `${this.pathDelimiter}${path}`); // itt íródik az urlbe a href érték
        this.manage();
        // this.routes[path]();
    }


    manage() {
        let path = this.#getPath();
        let instance = new this.routes[path]();
        instance[this.defaultMethod]();
    }
 

    #getPath() {
        let path =  location.search || location.hash || location.pathname;
        path = path.substring(1);
        if (!path || path === 'index.html') path = this.defaultPath;
        return path;
    }
}

export default Router;