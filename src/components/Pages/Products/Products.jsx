/* eslint-disable linebreak-style */
// export function ProductsPage() {
//   return <h1>Products Page</h1>
// }
import { useQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { ProductItem } from '../ProductItem/ProductItem'
import { AppContext } from '../../../Contexts/AppSetContextProvider'
import { dogFoodApi } from '../../../api/DogFoodApi'
import { Loader } from '../../Loader/Loader'
import productsStyle from './ProductsPage.module.css'
// import { withQuery } from '../../HOCs/withQuery'

// function ProductsInner({ data }) {

// }
// const ProductsWithQuery = withQuery(ProductsInner);
export function Products() {
  console.log('render products')
  const navigate = useNavigate()
  const { token } = useContext(AppContext)
  if (token) {
    const {
      data, isLoading, isError, error,
    } = useQuery({
      queryKey: ['allProducts'],
      queryFn: () => dogFoodApi.getAllProducts(),
    })
    if (isLoading) return <Loader />
    if (isError) {
      return (
        <div className="errorMessage">
          {error.message}
        </div>
      )
    }
    const { products } = data
    if (!products.length) {
      return <p>Список пуст</p>
    }
    return (
      <div className={productsStyle.products}>
        {products.map((product) => (
          <ProductItem
            // eslint-disable-next-line no-underscore-dangle
            key={product._id}
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
    )
  }
  useEffect(() => { navigate('/signin') })
}
