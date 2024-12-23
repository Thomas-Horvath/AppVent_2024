class Router {

    routes = {};

    register(path, method) {
        this.routes[path] = method;
        return this;
    }


    navigate(path) {
        this.routes[path]();
    }

}

export default Router;