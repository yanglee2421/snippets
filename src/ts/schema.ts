#! pnpm tsx

import { z } from "zod";

const schema = z.object({
  value: z
    .string()
    .refine(
      (value) => {
        return z.number().safeParse(Number.parseFloat(value)).success;
      },
      { message: "Is not a number" }
    )
    .transform(Number),
});

type FormValues = z.infer<typeof schema>;

console.log(schema.parse({ value: "工21312" }));
