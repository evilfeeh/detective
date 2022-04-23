import express from 'express'
import router from './router'
const app = express()

app.use(router)

app.listen(process.env.PORT, () => {
  console.log(`app is listen into ${process.env.PORT}`)
})
