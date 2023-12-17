import * as z from "zod";

export const signinValidation = z.object({
  name: z.string().min(2, { message: "masukkan nama" }),
  username: z.string().min(2, { message: "masukkan username" }),
  email: z.string().email(),
  password: z.string().min(8, { message: "masukkan password" }),
});
