/* eslint-disable linebreak-style */
import * as Yup from 'yup'

export const signinFormValidationSchema = Yup.object({
  password: Yup.string()
    .min(4, 'Не меньше четырех символов')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Required'),
})
