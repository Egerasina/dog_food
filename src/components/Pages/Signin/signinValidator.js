/* eslint-disable linebreak-style */
import * as Yup from 'yup'

export const signinFormValidationSchema = Yup.object({
  password: Yup.string()
    .min(4, 'Не меньше четырех символов')
    .required('Обязательное поле'),
  email: Yup.string()
    .email('Таких имейлов не бывает')
    .required('Обязательное поле'),
})
