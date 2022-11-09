import { Router } from '../lib/router'

const router = new Router()

router.get('/', (req, res) => {
    return new Response(JSON.stringify({message: 'Get'}))
})

router.post('/', (req, res) => {
    return new Response(JSON.stringify({message: 'Post'}))
})

export async function onRequest(context) {
    const { request } = context
    return router.handle(request, new Response())
}
