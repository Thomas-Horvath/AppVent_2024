
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

    register(path, classRef, action) {
        this.routes[path] = {
            controller: classRef,
            action: action || this.defaultMethod
        };
        return this;
    }


    navigate(path) {
        history.pushState(null, null, `${this.pathDelimiter}${path}`); // itt íródik az urlbe a href érték
        this.manage();
        // this.routes[path]();
    }


    manage() {
        let path = this.#getPath();
        
        let registry = this.routes[path[0]];
        let controller = registry.controller
        let instance = new controller();
        instance[registry.action](path.length > 1 ? path[1] : undefined);
    }


    #getPath() {
        let path = location.search || location.hash || location.pathname;
        path = path.substring(1);
        if (!path || path === 'index.html') path = this.defaultPath;
        return path.split('/');
    }
}

export default Router;