import { z } from "zod";

// 🔹 Zod schema
export const UserSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  location: z.enum(["mumbai", "nashik", "pune"], {
    required_error: "Location is required",
  }),
});

// 🔹 Type inference
export type UserType = z.infer<typeof UserSchema>;

// 🔹 Error type
export type formerrorType = Partial<Record<keyof UserType, string[]>>;
