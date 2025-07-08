import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import dotenv from 'dotenv'
import adminRoutes from './routes/admin'

dotenv.config()

const app = express()
app.use(cors())
app.use(helmet())
app.use(express.json())

app.use('/api/admin', adminRoutes)

app.get('/', (req, res) => {
  res.send('EduPlatform backend is running 🚀')
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
