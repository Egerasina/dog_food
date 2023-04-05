import * as Yup from 'yup'

export const signinValidationScheme = Yup.object({
  email: Yup.string()
    .email('Таких имейлов не бывает')
    .required('Обязательное поле'),
  password: Yup.string()
    .min(4, 'Не меньше четырех символов')
    .required('Обязательное поле'),
})
