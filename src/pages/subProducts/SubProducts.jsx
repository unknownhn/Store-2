import React from 'react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { getProduct } from '../../api/home/home';
import { useDispatch, useSelector } from 'react-redux';

const SubProducts = () => {

  const dispatch = useDispatch()

  const product = useSelector((store) => store.home.product);
  
  useEffect(() => {
    dispatch(getProduct())
  }, [dispatch])
  return (
    <div>
     {/* {
     product.map((e)=>{
        return (
            <h1>{e.productName}</h1>
        )
     })
     } */}
    </div>
  )
}

export default SubProducts
