import { z } from "zod";

export const firstStepSchema = z.object({
  name: z
    .string({
      required_error: "O nome é obrigatório",
    })
    .min(3, "o nome é muito curto")
    .max(50, "o nome é muito grande"),

  handle: z
    .string({
      required_error: "O nome de usuario é obrigatório",
    })
    .min(5, "O nome de usuario deve ter pelo menos 5 caracteres")
    .max(20, "O nome de usuario pode ter no máximo 20 caracteres")
    .regex(
      /^[a-zA-Z0-9_.]+$/,
      "O nome de usuario só pode conter letras, números, '_' e '.'"
    )
    .trim(),

  dateBirth: z.date({
    required_error: "A data de nascimento é obrigatório",
  }),
});
