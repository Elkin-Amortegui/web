'use server';

import { z } from 'zod';

// Contact Form Schema (Updated to include subject)
const contactFormSchema = z.object({
  name: z.string().min(3, 'Nombre es requerido (mínimo 3 caracteres).'),
  email: z.string().email('Correo electrónico inválido.'),
  subject: z.string().min(5, 'Asunto es requerido (mínimo 5 caracteres).'),
  message: z.string().min(10, 'Mensaje debe tener al menos 10 caracteres.'),
});

export type ContactFormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
  success: boolean;
};

export async function submitContactForm(
  prevState: ContactFormState,
  data: FormData
): Promise<ContactFormState> {
  const formData = Object.fromEntries(data);
  const parsed = contactFormSchema.safeParse(formData);

  if (!parsed.success) {
    const issues = parsed.error.issues.map((issue) => issue.message);
    return {
      message: 'Error de validación. Por favor revise los campos.',
      fields: formData as Record<string, string>, // Send back entered data
      issues,
      success: false,
    };
  }

  try {
    // Simulate sending email
    console.log('Contact Data:', parsed.data);
    // Example: await sendEmail({ to: 'centrodeidiomas@unillanos.edu.co', subject: `Nuevo Contacto: ${parsed.data.subject}`, body: ... });

    return { message: '¡Mensaje enviado con éxito! Gracias por contactarnos. Nos pondremos en contacto pronto.', success: true, fields: {}, issues: [] };
  } catch (error)
 {
    console.error('Contact submission error:', error);
    return { 
      message: 'Error al enviar el mensaje. Por favor, inténtelo de nuevo más tarde.', 
      success: false,
      fields: formData as Record<string, string>, // Send back entered data on server error too
      issues: ['Ocurrió un error en el servidor.']
    };
  }
}


// Enrollment Form Schema & Action (No longer used as per new requirements, can be removed or kept for reference)
/*
const enrollmentFormSchema = z.object({
  fullName: z.string().min(3, 'Nombre completo es requerido.'),
  age: z.coerce.number().min(5, 'Edad debe ser al menos 5 años.').max(100, 'Edad no puede ser mayor a 100.'),
  proficiencyLevel: z.string().min(1, 'Nivel de conocimiento es requerido.'),
  email: z.string().email('Correo electrónico inválido.'),
  phone: z.string().min(7, 'Teléfono debe tener al menos 7 dígitos.'),
  course: z.string().min(1, 'Debe seleccionar un curso.'),
  language: z.string().min(1, 'Debe seleccionar un idioma.'),
});

export type EnrollmentFormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
  success: boolean;
};

export async function submitEnrollmentForm(
  prevState: EnrollmentFormState,
  data: FormData
): Promise<EnrollmentFormState> {
  const formData = Object.fromEntries(data);
  const parsed = enrollmentFormSchema.safeParse(formData);

  if (!parsed.success) {
    const issues = parsed.error.issues.map((issue) => issue.message);
    return {
      message: 'Error de validación. Por favor revise los campos.',
      fields: formData as Record<string, string>,
      issues,
      success: false,
    };
  }

  try {
    console.log('Enrollment Data:', parsed.data);
    return { message: '¡Inscripción enviada con éxito! Nos pondremos en contacto pronto.', success: true };
  } catch (error) {
    console.error('Enrollment submission error:', error);
    return { message: 'Error al enviar el formulario. Por favor, inténtelo de nuevo.', success: false };
  }
}
*/