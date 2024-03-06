import * as z from "zod";

export const requestFormSchema = z.object ({
    customerName: z.string().min(1, "Cannot be left empty"),
    customerEmail: z.string().optional(),
    paymentAmount: z.string().min(1, "Cannot be left empty"),
    merchantAcountNumber: z.string().max(24, 'Account Number cannot be more than 24 characters.').min(16, "Account number cannot be less than 16 characters."),
    customerAccountNumber: z.string().max(24, 'Account Number cannot be more than 24 characters.').min(16, "Account number cannot be less than 16 characters."),
    customerBankName: z.string({required_error: "Cannot be left empty"}),
    paymentPurpose: z.string().max(500, "Cannot be more than 500 words.").min(1, "Cannot be left empty.")



}) 