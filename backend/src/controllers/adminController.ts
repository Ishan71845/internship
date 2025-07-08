import { Request, Response } from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import prisma from '../prisma/client'
import { z } from 'zod'

const loginSchema = z.object({
  username: z.string(),
  password: z.string()
})

export const loginAdmin = async (req: Request, res: Response) => {
  try {
    const data = loginSchema.parse(req.body)

    const admin = await prisma.admin.findUnique({
      where: { username: data.username }
    })

    if (!admin) {
      return res.status(401).json({ message: 'Invalid credentials' })
    }

    const validPassword = await bcrypt.compare(data.password, admin.password)
    if (!validPassword) {
      return res.status(401).json({ message: 'Invalid credentials' })
    }

    const token = jwt.sign(
      { adminId: admin.id },
      process.env.JWT_SECRET as string,
      { expiresIn: '7d' }
    )

    res.json({ token })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ message: error.errors })
    }
    console.error(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
}
