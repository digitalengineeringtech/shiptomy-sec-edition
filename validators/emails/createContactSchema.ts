import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().nonempty({ message: "Name is required" }),
  email: z.string().nonempty({ message: "Email is required" }),
  phone: z.string().nonempty({ message: "Phone is required" }),
  subject: z.string().nonempty({ message: "Subject is required" }),
  message: z.string().nonempty({ message: "Message is required" }),
});
