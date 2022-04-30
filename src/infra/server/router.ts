import { Router } from 'express'
const router = Router()

router.get('/', (req, res, next) => {
  res.send(`
  <!DOCTYPE html>
<html>
   <head>
      <title>Hello world</title>
   </head>
   <script src = "/socket.io/socket.io.js"></script>
   
   <script>
      const socket = io();
   </script>
   <body>Hello</body>
</html>`)
  next()
})

export default router
