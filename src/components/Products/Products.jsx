import { useQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { dogFoodApi } from '../../api/DogFoodApi'
import { ProductItem } from '../ProductItem/ProductItem'
import productsStyle from './products.module.css'
import { Loader } from '../Loader/Loader'
import { getTokenSelector } from '../../redux/slices/tokenSlice'
import { getSearchSelector } from '../../redux/slices/filterSlice'
import { getQueryKey } from './helper'
import { Search } from '../Search/Search'
import { scrollToTop } from '../HOCs/scrollToTop'

function ProductsInner() {
  console.log('render products')
  const navigate = useNavigate()
  const token = useSelector(getTokenSelector)
  const search = useSelector(getSearchSelector)
  useEffect(() => {
    if (!token) {
      navigate('/signin')
    }
  }, [token])
  const {
    data: products, isLoading, isError, error,
  } = useQuery({
    queryKey: getQueryKey(search),
    queryFn: () => dogFoodApi.getAllProducts(search, token),
    enabled: !!token,
  })
  if (isLoading) return <Loader />
  if (isError) {
    return (
      <div className={productsStyle.errorMessage}>
        {error.message}
      </div>
    )
  }
  return (
    <>
      <Search />
      {products[0] && (
      <div className={productsStyle.products}>
        {products.map((product) => (
          <ProductItem
            key={product._id}
            id={product._id}
            title={product.name}
            photo={product.pictures}
            price={product.price}
            wight={product.wight}
            discount={product.discount}
            tags={product.tags}
            likes={product.likes}
          />
        ))}
      </div>
      )}
      {!products[0] && products && (
      <div className={productsStyle.emptyList}>По Вашему запросу ничего не найдено</div>
      )}
    </>
  )
}
const ProductsScrollToTop = scrollToTop(ProductsInner)
export function Products() {
  return (
    <ProductsScrollToTop />
  )
}
