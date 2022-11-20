import { Router } from '../lib/router'

const router = new Router()

router.get('/', (req, res, payload) => {
    return new Response(JSON.stringify({ message: payload }))
})

router.post('/', (req, res, payload) => {
    return new Response(JSON.stringify({ message: payload }))
})

export async function onRequest(context) {
    const { request } = context
    try {
        return router.handle(request, new Response())
    } catch (error) {
        return new Response(
            process.env.NODE_ENV === 'production' ? 'Internal error' : error,
            {
                status: 500,
                statusText: 'Internal server error',
            }
        )
    }
}
