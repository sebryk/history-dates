import { FreeMode, Navigation } from 'swiper/modules';
import ArrowRight from '@/assets/RoundedButton/arrow-right.svg';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';
import { Container, SliderButton, SwiperWrapper } from './styles';
import { ISliderProps } from '@/types/types';
import { FC } from 'react';

const Slider: FC<ISliderProps> = ({ children, ...props }) => {
   return (
      <Container>
         <SwiperWrapper
            {...props}
            modules={[FreeMode, Navigation]}
            navigation={{
               prevEl: '.swiper-button-prev',
               nextEl: '.swiper-button-next',
            }}
            watchOverflow={true}
            loop={false}
            freeMode={true}
            slidesPerView="auto"
            centeredSlides={false}
            spaceBetween={25}
            breakpoints={{
               321: {
                  spaceBetween: 20,
               },
               764: {
                  spaceBetween: 80,
               },
            }}
         >
            {children}
         </SwiperWrapper>
         <SliderButton icon={<ArrowRight />} className="swiper-button-next" />
         <SliderButton icon={<ArrowRight />} isReversed={true} className="swiper-button-prev" />
      </Container>
   );
};

export default Slider;
