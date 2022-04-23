import { Router } from 'express'
const router = Router()

router.get('/', (req, res, next) => {
  res.end('test')
})

export default router
