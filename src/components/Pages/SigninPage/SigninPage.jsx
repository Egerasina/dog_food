/* eslint-disable linebreak-style */
import {
  Formik, Form, ErrorMessage, Field,
} from 'formik'
import { signinFormValidationSchema } from './validator'

const initialValues = {
  email: '',
  password: '',
}

export function SigninPage() {
  const submitHandler = (values) => {
    console.log({ values })
  }
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signinFormValidationSchema}
      onSubmit={submitHandler}
    >
      <Form className="d-flex flex-column">
        <Field
          name="email"
          type="text"
          placeholder="Введите e-mail"
        />
        <ErrorMessage name="email" />

        <Field
          name="password"
          type="text"
          placeholder="Введите пароль"
        />
        <ErrorMessage name="password" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  )
}
