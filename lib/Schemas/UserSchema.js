import * as z from "zod";

export const LoginSchema = z.object({
  email: z.email("Invalid Email"),
  password: z
    .string()
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/,
      "Password Invalid"
    ),
});

export const RegisterSchema = z.object({
  name: z
    .string()
    .min(4, "Your name should contain more than 3 characters")
    .max(29, "Your name should contain less than 30 characters"),
  email: z.email("Invalid Email"),
  password: z
    .string()
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/,
      "Password must strong, should contain atleast 8 character capital, small letters and numbers"
    ),
});
