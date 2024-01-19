'use client'

import Bike from './Bike';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const PopularCarousel = ({bikes}) => {
  return (
    <Swiper
    slidesPerView={1}
    spaceBetween={30}
    breakpoints={{
      640: {slidesPerView: 1 },
      768: {slidesPerView: 2 },
      960: {slidesPerView: 3 },
      1440: {slidesPerView: 4 },
    }}
    pagination={{
      clickable: true,
    }}
    modules={[Pagination]}
    className='popular-bike-slider mb-8'
    >
        {
            bikes.map((bike) => {
                return <SwiperSlide key={bike._id}>
                    <Bike bike={bike} />
                </SwiperSlide>
            })
        }
    </Swiper>
  )
}

export default PopularCarousel