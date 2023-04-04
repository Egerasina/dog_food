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
