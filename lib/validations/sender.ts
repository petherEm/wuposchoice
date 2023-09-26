import * as z from "zod";

export const SenderValidation = z.object({
    firstName: z.string().nonempty(),
    lastName: z.string().nonempty(),
    countryOfResidence: z.string().nonempty(),
    postCode: z.string().nonempty(),
    state: z.string(),
    city: z.string().nonempty(),
    address: z.string().nonempty(),
    countryCode: z.string().nonempty(),
    phoneNumber: z.string().nonempty(),
    mobileCountryCode: z.string().nonempty(),
    mobileNumber: z.string().nonempty(),
    email: z.string().nonempty(),
});