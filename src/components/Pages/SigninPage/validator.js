/* eslint-disable linebreak-style */
import * as Yup from 'yup'

export const signinFormValidationSchema = Yup.object({
  password: Yup.string()
    .min(6, 'Не меньше шести символов')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Required'),
})
