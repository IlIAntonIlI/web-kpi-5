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
        if (!fns.length) {
            throw new Error('Route must have handler')
        }
        if (this.handlers[route]?.[method]) {
            this.handlers[route][method].push(...fns)
            return
        }
        this.handlers[route] = {
            ...this.handlers[route],
            [method]: [...fns],
        }
    }

    async handle(request, response) {
        const { url, method } = request
        const path = new URL(url || '/', `http://${request.headers.host}`).pathname
        console.log(this.handlers);
        if (!this.handlers[path]?.[method]) {
            return new Response('NOT FOUND', {
              status: 404,
              statusText: 'NOT FOUND',
            })
          }
      
          let body = {}
          for (const handler of this.handlers[path][method]) {
            const res = await handler(request, response)
            const resBody = await res.json()
            body = {
              ...body,
              ...resBody,
            }
          }
          return new Response(JSON.stringify(body, null, '\t'), {
            status: 200,
            statusText: 'OK',
          })
    }

    get(path, ...fns) {
        this.add(METHODS.GET, path, ...fns)
    }

    post(path, ...fns) {
        this.add(METHODS.POST, path, ...fns)
    }

    patch(path, ...fns) {
        this.add(METHODS.POST, path, ...fns)
    }
}
