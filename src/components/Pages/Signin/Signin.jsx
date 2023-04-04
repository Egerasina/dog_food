/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
/* eslint-disable linebreak-style */

import {
  ErrorMessage, Field, Form, Formik,
} from 'formik'
import classNames from 'classnames'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { signinFormValidationSchema } from './signinValidator'
import signinStyle from './signinmodule.css'
import { dogFoodApi } from '../../../api/DogFoodApi'
import { withQuery } from '../../HOCs/withQuery'
import { AppSetContext } from '../../../Contexts/AppSetContextProvider'
// import { withQuery } from '../HOCs/withQuery'
// import { AppSetContext } from '../../Contexts/AppContextProvider'
// import { dogFoodApi } from '../../api/DogFoodApi'

function SigninInner({ mutateAsync }) {
  const navigate = useNavigate()
  const submitHandler = async (values) => {
    await mutateAsync(values)
    setTimeout(() => navigate('/products'))
  }
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={signinFormValidationSchema}
      onSubmit={submitHandler}
    >
      {(formik) => {
        const { isValid } = formik
        return (
          <Form className={signinStyle.form}>
            <Field
              className={signinStyle.field}
              type="email"
              name="email"
              placeholder="email"
            />
            <ErrorMessage
              className={signinStyle.error}
              name="email"
              component="div"
            />
            <Field
              className={signinStyle.field}
              type="password"
              name="password"
              placeholder="пароль"
            />
            <ErrorMessage
              className={signinStyle.error}
              name="password"
              component="div"
            />
            <button
              className={classNames(signinStyle.button, {
                [signinStyle.disabled]: !isValid,
              })}
              type="submit"
              disabled={!isValid}
            >
              Войти
            </button>
          </Form>
        )
      }}
    </Formik>
  )
}
const SigninWithQuery = withQuery(SigninInner)
function Signin() {
  console.log('render signin')
  const { setToken, setUserID } = useContext(AppSetContext)
  const {
    mutateAsync, isError, error, isLoading,
  } = useMutation({
    mutationFn: (values) => dogFoodApi.signin(values)
      .then((result) => {
        setToken(result.token)
        setUserID(result.data._id)
      }),
  })

  return (
    <SigninWithQuery
      mutateAsync={mutateAsync}
      isError={isError}
      error={error}
      isLoading={isLoading}
    />

  )
}
export const SigninMemo = React.memo(Signin)

// import {
//   Formik, Form, ErrorMessage, Field,
// } from 'formik'
// import { signinFormValidationSchema } from './signinValidator'

// const initialValues = {
//   email: '',
//   password: '',
// }

// export function SigninPage() {
//   const submitHandler = (values) => {
//     console.log({ values })
//   }
//   return (
//     <Formik
//       initialValues={initialValues}
//       validationSchema={signinFormValidationSchema}
//       onSubmit={submitHandler}
//     >
//       <Form className="d-flex flex-column">
//         <Field
//           name="email"
//           type="text"
//           placeholder="Введите e-mail"
//         />
//         <ErrorMessage name="email" />

//         <Field
//           name="password"
//           type="text"
//           placeholder="Введите пароль"
//         />
//         <ErrorMessage name="password" />

//         <button type="submit">Submit</button>
//       </Form>
//     </Formik>
//   )
// }
