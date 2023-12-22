import React, { useEffect } from 'react'
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'
import '../../App.css'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Cotegory from '../../Component/Cotegory';
import Sales from '../../Component/Sales';
import { getProduct } from '../../api/home/home';
import { FreeMode } from 'swiper/modules';
import { useDispatch, useSelector } from 'react-redux';
import { ModalPostTrue } from '../../reducers/home/home';
import { closeModal } from '../../reducers/home/home';

const Home = () => {

  const dispatch = useDispatch()

  const product = useSelector((store) => store.home.product);

  const [cart, setCart] = useState()

  const [open, setOpen] = useState()


  let modal = useSelector((store) => store.home.ModalPost);
  let obj = useSelector((store) => store.home.newImg);



  useEffect(() => {
    dispatch(getProduct())
  }, [dispatch])

  return (
    <div className='wrapper'>
      <div className="w-[73%] m-auto">

        <div className="pt-[130px] ">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide><img src="src/assets/banner-1696573347630 (1).png" alt="" /></SwiperSlide>
            <SwiperSlide><img src="src/assets/banner-1696483363655.jpg" alt="" /></SwiperSlide>

          </Swiper>
        </div>


        <div className="">
          <div className="mb-[40px]">
            <h1 className='text-[24px] font-[700] mt-[65px] '>Популярные категории</h1>
          </div>
          <div className="Cotegory grid grid-cols-6 gap-[30px]">
            <Cotegory img={'src/assets/widgetLink-1675228380706.jpg'} title={'Скидки'} />
            <Cotegory img={'src/assets/Смартфоны-1638869130347.jpg'} title={'Смартфоны и планшеты'} />
            <Cotegory img={'src/assets/widgetLink-1681729799113.jpg'} title={'Кондиционеры'} />
            <Cotegory img={'src/assets/widgetLink-1700564306566.jpg'} title={'Парфюмерия'} />
            <Cotegory img={'src/assets/Наушники-1638869187090.jpg'} title={'Наушники'} />
            <Cotegory img={'src/assets/Телевизоры-1638869164491.jpg'} title={'Телевизоры'} />
            <Cotegory img={'src/assets/Ноутбуки-1638869204798.jpg'} title={'Ноутбуки'} />
            <Cotegory img={'src/assets/widgetLink-1689853071427.jpg'} title={'Книги'} />
            <Cotegory img={'src/assets/widgetLink-1676893564298.jpg'} title={'Бытовая техника'} />
            <Cotegory img={'src/assets/widgetLink-1678167268234.jpg'} title={'Мелкая бытовая техника'} />
            <Cotegory img={'src/assets/Строительные инструменты-1644811867801.jpg'} title={'Строительство и ремонт'} />
            <Cotegory img={'src/assets/aaaa.png'} title={'Товары для красоты'} />
          </div>

        </div>


        <div className="">

          <div className="">
            <div className="flex items-center mt-[75px]">
              <h1 className='text-[24px] font-[700]'>Самые горячие скидки 🔥</h1>
              <span className='pl-[15px] text-[#3E75A8] font-[600]'>Смотреть все</span>
            </div>
          </div>

          <div className="mt-[60px] ">
            <Swiper
              slidesPerView={5}
              spaceBetween={140}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper " x
            >
              {
                product.map((e) => {
                  return (
                    <div className=" p-[10px]" >
                      <SwiperSlide onClick={() => (dispatch(ModalPostTrue(e)), setModalElement({ e }))}  ><Sales e={e} id={e.id} img={`${import.meta.env.VITE_APP_FILES_URL}${e.image}`} btn={'-36%'} cost={e.price} prev={'4564c'} title={e.productName} color={e.color} /></SwiperSlide>
                    </div>
                  )
                })
              }


            </Swiper>
          </div>
          {
            modal ? <div className="w-[100%] h-[100vh] flex items-center justify-center  bg-[#07040458] z-40 fixed translate-x-[-50%] translate-y-[-50%] top-1/2 left-1/2 ">
              <div className="w-[65%] flex text-center justify-center gap-[50px]  items-center bg-[white] rounded-2xl h-[70vh]">
                <div className=" w-[44%] ">
                  <img className='w-[100%] rounded-lg h-[65vh]  object-cover' src={`${import.meta.env.VITE_APP_FILES_URL}${obj.image}`} alt="" />
                </div>
                <div className="w-[47%] -2xl pt-[10px] h-[65vh]">
                  <h1 className='text-[34px]'>{obj.productName}</h1>
                  <div className="flex pb-[5px] mt-[20px]  items-center justify-center text-[32px] font-[500] gap-[20px]">
                    <h1>{obj.price}</h1>
                    <h1 className='line-through text-[25px]  text-[#9BA1A7]'>4564c.</h1>
                    <button className='bg-[#ff4444] px-[9px] py-[2px] text-[white] text-[12px] rounded-[8px]'>36%</button>
                  </div>
                  <div className="mt-[10px]">
                    <h1 className='text-[black] text-[20px] font-[500]'>Color<span className='text-[#94979a] pl-[10px]'>{obj.color}</span></h1>
                  </div>
                  <div className="mt-[10px]">
                    <h1></h1>
                  </div>
                </div>
              </div>
            </div> : null
          }

        </div>
      </div>
    </div>
  )
}

export default Home










{/*  */ }
