import { z } from 'zod'

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Name can only contain letters, spaces, hyphens, and apostrophes'),
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address')
    .max(254, 'Email must be less than 254 characters'),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || val.length === 0 || /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(val),
      'Please enter a valid phone number'
    ),
  subject: z.enum(['reservation', 'catering', 'feedback', 'other'], {
    required_error: 'Please select a subject',
    invalid_type_error: 'Please select a valid subject',
  }),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(500, 'Message must be less than 500 characters'),
})

export type ContactFormData = z.infer<typeof contactSchema>

export const subjectOptions = [
  { value: 'reservation', label: 'Table Reservation' },
  { value: 'catering', label: 'Catering Inquiry' },
  { value: 'feedback', label: 'Feedback / Complaint' },
  { value: 'other', label: 'Other' },
] as const