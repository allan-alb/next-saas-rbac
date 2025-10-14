import type { FastifyInstance } from 'fastify'
import type { ZodTypeProvider } from 'fastify-type-provider-zod'
import { z } from 'zod'

export async function createAccount(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    '/users',
    {
      schema: {
        body: z.object({
          name: z.string().min(2).max(100),
          email: z.email(),
          password: z.string().min(6).max(100),
        }),
      },
    },
    () => {
      return 'User created'
    }
  )
}
