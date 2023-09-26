import * as z from "zod";

export const PayoutValidation = z.object({
   deliveryServices: z.string().nonempty(),
   deliveryOption: z.string().nonempty(),
});