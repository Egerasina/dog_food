/* eslint-disable react/jsx-no-bind */
import { QueryClientProvider, useQueryClient } from '@tanstack/react-query'
import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getCartSelector } from '../../redux/slices/cartSlice'
import { clearToken, getTokenSelector } from '../../redux/slices/tokenSlice'
import { clearUserID } from '../../redux/slices/userIDSlice'
import headerStyle from './header.module.css'

export function Header() {
  console.log('render header')
  const dispatch = useDispatch()
  const token = useSelector(getTokenSelector)
  const cart = useSelector(getCartSelector)
  const { clearClient } = useQueryClient(QueryClientProvider)
  function logoutHandler() {
    dispatch((clearToken()))
    dispatch((clearUserID()))
    setTimeout(clearClient)
  }
  return (
    <ul className={headerStyle.header}>
      <li>
        <NavLink
          className={({ isActive }) => classNames({ [headerStyle.activeLink]: isActive }, [
            headerStyle.link, headerStyle.mainWrapper,
          ])}
          to="/"
        >
          Главная
        </NavLink>

      </li>
      <li>

        <NavLink
          className={({ isActive }) => classNames({ [headerStyle.activeLink]: isActive }, [
            headerStyle.link, headerStyle.productsWrapper,
          ])}
          to="/products"
        >
          Каталог
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) => classNames({ [headerStyle.activeLink]: isActive }, [
            headerStyle.link, headerStyle.cartWrapper,
          ])}
          to="/cart"
        >
          <i className="fa-solid fa-cart-shopping" />
          <div className={headerStyle.productsQuantity}>{token ? (cart.length || '') : '' }</div>
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
            onClick={logoutHandler}
            className={({ isActive }) => classNames({ [headerStyle.activeLink]: isActive }, [
              headerStyle.link,
            ])}
            to="/"
          >
            Выйти
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
