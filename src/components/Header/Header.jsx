import classNames from 'classnames'
import { memo } from 'react'
import { Link, NavLink } from 'react-router-dom'
import headerStyles from './header.module.css'

function Header() {
  console.log('Render Header')
  return (
    <header className={headerStyles.wr}>
      <nav>
        <ul className={headerStyles.headerMenu}>
          <li>
            <Link to="/">
              Главная
            </Link>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => classNames({ [headerStyles.activeLink]: isActive })}
              to="/products"
            >
              Каталог
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => classNames({ [headerStyles.activeLink]: isActive })}
              to="/signup"
            >
              Регистрация
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => classNames({ [headerStyles.activeLink]: isActive })}
              to="/signin"
            >
              Вход
            </NavLink>
          </li>

        </ul>
      </nav>
    </header>
  )
}

export const HeaderMemo = memo(Header)
