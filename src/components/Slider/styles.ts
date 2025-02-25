import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import RoundedButton from '../ui/Buttons/RoundedButton';

export const Container = styled.div`
   position: relative;
   width: 100%;

   .swiper {
      cursor: grab;
   }
   .swiper-button-disabled {
      display: none;
   }

   @media (max-width: 763px) {
      &::after {
         content: '';
         position: absolute;
         width: 100%;
         height: 1px;
         background-color: var(--grey-color);
         top: -40px;
      }
   }

   @media (max-width: 762px) and (min-width: 321px) {
      &::after {
         top: -5.25vw;
      }
   }

   @media (max-width: 320px) {
      .swiper-slide-next {
         opacity: 0.4;
      }
      &::after {
         content: '';
         position: absolute;
         width: 100%;
         height: 1px;
         background-color: var(--grey-color);
         top: -20px;
      }
   }
`;

export const SwiperWrapper = styled(Swiper)`
   width: 100%;
   margin: 0;
   display: flex;
   overflow: hidden;
   justify-content: flex-start;
   padding: 0;
`;

export const SliderItem = styled(SwiperSlide)`
   width: 100%;
   max-width: 320px;
   border-radius: 24px;
   position: relative;
   flex-shrink: 0;

   @media (max-width: 1160px) {
      max-width: 27.59vw;
      border-radius: 2.07vw;
   }
   @media (max-width: 763px) {
      max-width: 320px;
      border-radius: 24px;
   }

   @media (max-width: 762px) and (min-width: 321px) {
      max-width: 41.99vw;
      border-radius: 3.15vw;
   }

   @media (max-width: 320px) {
      max-width: 166px;
   }
`;

export const SliderButton = styled(RoundedButton)`
   align-items: center;
   box-shadow: 0 0 15px 0 rgba(56, 119, 238, 0.1);
   background-color: #ffffff;
   border: none;
   top: 61px;
   right: -60px;
   left: ${({ isReversed }) => (isReversed ? '-60px' : 'auto')};
   svg {
      width: 8px;
   }

   @media (max-width: 1160px) {
      top: 5.26vw;
      right: -5.17vw;
      left: ${({ isReversed }) => (isReversed ? '-5.17vw' : 'auto')};
      svg {
         width: 0.69vw;
      }
      box-shadow: 0 0 1.29vw 0 rgba(56, 119, 238, 0.1);
   }

   &:after {
      display: none;
   }
   @media (max-width: 763px) {
      display: none;
   }
`;
