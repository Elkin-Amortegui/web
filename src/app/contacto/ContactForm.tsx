'use client';

import { useEffect } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { submitContactForm, type ContactFormState } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast'; // Corrected path if use-toast is in hooks
import { Loader2 } from 'lucide-react';

const contactFormSchema = z.object({
  name: z.string().min(3, 'Nombre es requerido (mínimo 3 caracteres).'),
  email: z.string().email('Correo electrónico inválido.'),
  subject: z.string().min(5, 'Asunto es requerido (mínimo 5 caracteres).'),
  message: z.string().min(10, 'Mensaje debe tener al menos 10 caracteres.'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      {pending ? 'Enviando...' : 'Enviar Mensaje'}
    </Button>
  );
}

export default function ContactForm() {
  const { toast } = useToast();
  const [formState, formAction] = useFormState<ContactFormState, FormData>(submitContactForm, {
    message: '',
    success: false,
  });

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: formState.fields?.name || '',
      email: formState.fields?.email || '',
      subject: formState.fields?.subject || '',
      message: formState.fields?.message || '',
    }
  });

  useEffect(() => {
    if (formState.message) {
      toast({
        title: formState.success ? 'Mensaje Enviado' : 'Error en el Formulario',
        description: formState.message,
        variant: formState.success ? 'default' : 'destructive',
      });
      if (formState.success) {
        reset({ name: '', email: '', subject: '', message: '' });
      }
    }
  }, [formState, toast, reset]);
  
  // Wrapper function to satisfy react-hook-form's onSubmit with formAction
  const handleFormSubmit = (data: ContactFormData) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, String(value));
    });
    formAction(formData);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
      <div>
        <Label htmlFor="contact-name">Nombre Completo</Label>
        <Input id="contact-name" {...register('name')} placeholder="Tu nombre completo" className="mt-1" />
        {errors.name && <p className="text-sm text-destructive mt-1">{errors.name.message}</p>}
      </div>

      <div>
        <Label htmlFor="contact-email">Correo Electrónico</Label>
        <Input id="contact-email" type="email" {...register('email')} placeholder="tu@correo.com" className="mt-1" />
        {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <Label htmlFor="contact-subject">Asunto</Label>
        <Input id="contact-subject" {...register('subject')} placeholder="Asunto de tu mensaje" className="mt-1" />
        {errors.subject && <p className="text-sm text-destructive mt-1">{errors.subject.message}</p>}
      </div>

      <div>
        <Label htmlFor="contact-message">Mensaje</Label>
        <Textarea
          id="contact-message"
          {...register('message')}
          placeholder="Escribe tu consulta aquí..."
          className="mt-1 min-h-[120px]"
        />
        {errors.message && <p className="text-sm text-destructive mt-1">{errors.message.message}</p>}
      </div>
      
      <SubmitButton />
      {formState.issues && formState.issues.length > 0 && !formState.success && (
        <div className="text-sm text-destructive mt-2 space-y-1">
          {formState.issues.map((issue, index) => <p key={index}>{issue}</p>)}
        </div>
      )}
    </form>
  );
}
