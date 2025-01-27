import { z } from "zod";

export  const projectSchema = z.object({
    name: z.string().min(3).max(50, "Project Must Be Between 3 and 50 Characters"),
    key: z.string().min(3).max(10,"Project Key Must Be Between 3 and 10 Characters"),
    description: z.string().max(50, "Project Description Must Be Between 3 and 50 Characters").optional(),
})