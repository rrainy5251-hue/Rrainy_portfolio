import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    type: z.string(),
    year: z.string(),
    client: z.string(),
    role: z.string(),
    summary: z.string(),
    cover: z.string().optional(),
    order: z.number().optional()
  })
});

export const collections = { projects };
