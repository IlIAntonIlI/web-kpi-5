export const METHODS = {
    POST: 'POST',
    GET: 'GET',
    PATCH: 'PATCH',
}

export class Router {
    constructor() {
        this.handlers = {}
    }

    add(method, route, ...fns) {
        console.log(method, route, fns)
        if (!fns.length) {
            throw new Error('Route must have handler')
        }
        if (this.handlers[route]?.[method]) {
            this.handlers[route][method].push(...fns)
            return
        }
        this.handlers[route] = {
            ...this.handlers,
            [method]: [...fns],
        }
    }

    get(path, ...fns) {
        this.add(METHODS.GET, path, ...fns)
    }

    post(path, fns) {
        this.add(METHODS.POST, path, ...fns)
    }

    patch(path, fns) {
        this.add(METHODS.POST, path, ...fns)
    }
}
