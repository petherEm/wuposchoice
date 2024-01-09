import * as z from "zod";

export const ReceiverValidation = z.object({
  firstName: z.string().nonempty(),
  lastName: z.string().nonempty(),
  mobileCountryCode: z.string().nonempty(),
  mobileNumber: z.string().nonempty(),
});
