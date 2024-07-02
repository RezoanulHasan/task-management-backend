import { z } from 'zod';

export const ValidationTaskSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
    }),

    description: z.string({
      required_error: 'Description is required',
    }),

    image: z.string().optional(),

    status: z.enum(['completed', 'incomplete']).optional(),

    isDeleted: z.boolean().optional(),

    createdAt: z.date().optional(),

    updatedAt: z.date().optional(),
  }),
});
