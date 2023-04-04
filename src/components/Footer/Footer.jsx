/* eslint-disable linebreak-style */
import classNames from 'classnames'
import { NavLink } from 'react-router-dom'
import footerStyles from './footer.module.css'

export function Footer() {
  console.log('Render Footer')
  return (
    <footer className={footerStyles.wr}>
      <nav>
        <ul className={footerStyles.footerMenu}>
          <li>
            <NavLink
              className={
                ({ isActive }) => classNames({ [footerStyles.activeLink]: isActive })
              }
              to="/contacts"
            >
              Контакты
            </NavLink>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

// import { memo } from 'react'
// import { useTodoListMethodsContext } from '../../contexts/TodoListContextProvider'

// export const Footer = memo(() => {
//   console.log('Render Footer')

//   const { clearAllTodos } = useTodoListMethodsContext()

//   const clearHandler = (e) => {
//     clearAllTodos(e, 'hello')
//   }

//   return (
//     <footer className="d-flex justify-content-center">
//       <button
//         // onClick={clearAllTodos}
//         onClick={clearHandler}
//         type="button"
//         className="btn btn-dark"
//       >
//         Clear all
//       </button>
//     </footer>
//   )
// })
