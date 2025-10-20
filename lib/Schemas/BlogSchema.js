import * as z from "zod";

export const BlogSchema = z.object({
  title: z.string().min(4, "Title should have more than 4 character.").max(12, "Title should have less than 12 character"),
  desc: z
    .string()
    .min(10, "Title should have more than 10 character.").max(60, "Title should have less than 60 character")
});