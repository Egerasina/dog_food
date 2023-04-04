/* eslint-disable linebreak-style */
import * as Yup from 'yup'

export const signupFormValidationSchema = Yup.object({
  password: Yup.string()
    .min(4, 'Не меньше четырех символов')
    .required('Обязательное поле'),
  group: Yup.string()
    .oneOf(
      ['sm9'],
      'Придется вспомнить',
    )
    .required('Обязательное поле'),
  email: Yup.string()
    .email('Таких имейлов не бывет')
    .required('Обязательное поле'),
})
