import express from 'express'
import routers from './router.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(routers)
app.use(express.static('public'))

app.listen(process.env.PORT, () => {
  console.log(`app listen into ${process.env.PORT}`)
})
