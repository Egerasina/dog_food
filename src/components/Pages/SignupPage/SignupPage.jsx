/* eslint-disable linebreak-style */
import {
  Formik, Form, ErrorMessage, Field,
} from 'formik'
import { signupFormValidationSchema } from './validator2'

const initialValues = {
  email: '',
  password: '',
  group: '',
}

export function SignupPage() {
  const submitHandler = (values) => {
    console.log({ values })
  }
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signupFormValidationSchema}
      onSubmit={submitHandler}
    >
      <Form className="d-flex flex-column">
        <Field
          name="email"
          type="text"
          placeholder="email here"
        />
        <ErrorMessage name="email" />

        <Field
          name="group"
          type="text"
          placeholder="sm9"
        />
        <ErrorMessage name="group" />

        <Field
          name="password"
          type="text"
          placeholder="password here"
        />
        <ErrorMessage name="password" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  )
}
