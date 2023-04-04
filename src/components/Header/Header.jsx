/* eslint-disable react/jsx-no-comment-textnodes */
import { QueryClientProvider, useQueryClient } from '@tanstack/react-query'
import classNames from 'classnames'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import headerStyle from './header.module.css'
import { AppContext, AppSetContext } from '../../Contexts/AppSetContextProvider'

export function Header() {
  console.log('render header')
  const { token } = useContext(AppContext)
  const { setToken, setUserID } = useContext(AppSetContext)
  const { clearClient } = useQueryClient(QueryClientProvider)

  function logoutHandler() {
    setToken('')
    setUserID('')
    setTimeout(clearClient)
  }
  return (
    <ul className={headerStyle.header}>
      <li>
        <NavLink
          className={({ isActive }) => classNames({ [headerStyle.activeLink]: isActive }, [
            headerStyle.link,
          ])}
          to="/"
        >
          Главная
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => classNames({ [headerStyle.activeLink]: isActive }, [
            headerStyle.link,
          ])}
          to="/products"
        >
          Каталог
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => classNames({ [headerStyle.activeLink]: isActive }, [
            headerStyle.link,
          ])}
          to="/signup"
        >
          Регистрация
        </NavLink>
      </li>
      {token ? (
        <li>
          <NavLink
            // eslint-disable-next-line react/jsx-no-bind
            onClick={logoutHandler}
            className={({ isActive }) => classNames({ [headerStyle.activeLink]: isActive }, [
              headerStyle.link,
            ])}
            to="/signin"
          >
            Выход
          </NavLink>
        </li>
      ) : (
        <li>
          <NavLink
            className={({ isActive }) => classNames({ [headerStyle.activeLink]: isActive }, [
              headerStyle.link,
            ])}
            to="/signin"
          >
            Вход
          </NavLink>
        </li>
      )}
    </ul>
  )
}
