import React from 'react'
import '../../styles/testimonials.css'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards'

// import {EffectCards} from 'swiper'

export default function Testmonials() {
 return (
 <>
    <section>
         <div className='container'>
              <Swiper
              effect={"cards"}
              grabCursor={true}
            //   modules={[EffectCards]}
              className='mySwiper'
            >
              <SwiperSlide>
                <div className="slide__item">
                    
                </div>
              </SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              
            </Swiper>
         </div>
    </section>
 </>
);
}

