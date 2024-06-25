'use client'

import { useMemo } from 'react'
import { useTranslations } from 'next-intl'
import { z } from 'zod'
import { redirect } from 'next/navigation'
import { toast } from 'react-toastify'
import { InnerLayout } from '@/components/auth'
import { FormSchema } from '@/types/auth'
import Form from '@/components/auth/form'
import { useForgotPassword } from '../hooks/use-forgot-password'

function ForgotPasswordForm(): React.ReactElement {
  const t = useTranslations()
  const { isPending, isSuccess, mutate, isError, error } = useForgotPassword()
  const schema = useMemo(
    () =>
      z.object({
        email: z
          .string()
          .email(t('invalidFormat', { name: t('email') }))
          .min(1),
      }),
    [t]
  )

  const submitHandler = async (data: FormSchema) => {
    try {
      await schema.parse(data)
      mutate(data)

      if (isSuccess) {
        toast.success(t('verfication'), {
          position: 'top-right',
        })
        redirect('/signin')
      } else if (isError) {
        error?.message
          ? toast.error(error?.message, { position: 'top-right' })
          : toast.error(t('error', { name: t('resetPassword') }), { position: 'top-right' })
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Set Zod errors to the form state
        // error.errors.forEach((err) => {
        //     if (err.path) {
        //         setError(err.path[0] as keyof FormData, {
        //             type: "manual",
        //             message: err.message,
        //         });
        //     }
        // });
        console.log(error)
      }
    }
  }

  return (
    <InnerLayout
      title={t('forgotTitle')}
      description={t('forgotDescription')}
      linkText={t('forgotLink')}
      cta={t('signIn')}
    >
      <Form submitHandler={submitHandler} email={t('email')} isSubmitting={isPending} btnText={t('forgotPassword')} />
    </InnerLayout>
  )
}

export { ForgotPasswordForm }
