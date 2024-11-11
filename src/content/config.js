import { defineCollection, z } from "astro:content";

const projectCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		description: z.string(),
		dateFormatted: z.string(),
		img: z.string(),
		img_alt: z.string().optional(),
	}),
});

export const collections = {
	project: projectCollection,
};
