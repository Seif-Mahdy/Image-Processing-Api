import express from 'express'
import morgan from 'morgan'
import * as dotenv from 'dotenv'
import routes from './routes/index'

dotenv.config()

const PORT = process.env.PORT || 3000

// create app
const app = express()

// add morgan for logging
app.use(morgan('dev'))

// register routes
app.use('/', routes)

// start server
app.listen(PORT, () => {
  console.log(`Server is running at prot:${PORT}`)
})

export default app
