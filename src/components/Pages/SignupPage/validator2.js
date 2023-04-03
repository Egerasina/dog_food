/* eslint-disable linebreak-style */
import * as Yup from 'yup'

export const signupFormValidationSchema = Yup.object({
  password: Yup.string()
    .min(6, 'Не меньше шести символов')
    .required('Required'),
  group: Yup.string()
    .oneOf(
      ['sm9'],
      'Invalid Group Type',
    )
    .required('Required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Required'),
})