import { z } from "zod";

export const signUpSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z.string().email({ message: "Provide a valid email" }).trim(),
  password: z
    .string()
    .min(1, { message: "Password is required" })
    .length(4, { message: "Password length must be minimum 4" }),
});
