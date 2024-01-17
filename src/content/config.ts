import { defineCollection } from "astro:content";
import { z } from "zod";

const projectsCollection = defineCollection({
  schema: z.object({
    inProgress: z.boolean(),
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    link: z.string(),
    projectImage: z.object({
      url: z.string(),
      alt: z.string().optional(),
    }),
  }),
});

export const collections = {
  projects: projectsCollection,
};
