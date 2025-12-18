import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email("Invalid Email"),

  password: z
    .string()
    .regex(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must be at least 8 characters and include uppercase, number and special character"
    ),
});

export const RegisterSchema = z.object({
  name: z
    .string()
    .min(4, "Your name should contain more than 3 characters")
    .max(29, "Your name should contain less than 30 characters"),

  email: z.string().email("Invalid Email"),

  password: z
    .string()
    .regex(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must be at least 8 characters and include uppercase, number and special character"
    ),
});

