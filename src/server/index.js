import express from 'express'
import routers from './router.js'

const app = express()
app.use(routers)

app.listen(process.env.PORT, () => {
  console.log(`app listen into ${process.env.PORT}`)
})
