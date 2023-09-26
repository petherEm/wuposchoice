import * as z from "zod";

export const TransferValidation = z.object({
  senderCurrency: z.string().nonempty(),
  payoutCountry: z.string().nonempty(),
  amountToSend: z.number(),
  amountToReceive: z.number(),
  totalAmount: z.number(),
});
