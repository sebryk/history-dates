import styled from 'styled-components';

export const Section = styled.section`
   width: 100%;
   height: 100dvh;
`;

export const Container = styled.div`
   max-width: 1440px;
   width: 100%;
   min-height: 1080px;
   margin: 0 auto;
   padding: 170px 80px 90px;
   background-color: var(--white-color);
   border: 1px solid var(--primary-color-10);
   border-top: none;
   border-bottom: none;
   position: relative;
   transform: translateX(80px);

   &::after {
      position: absolute;
      top: 480px;
      left: 0;
      content: '';
      width: 100%;
      height: 1px;
      background-color: var(--primary-color-10);
      z-index: 0;
   }

   @media (max-width: 1160px) {
      padding: 14.66vw 6.9vw 7.76vw;

      &::after {
         top: 41.38vw;
      }
   }

   @media (max-width: 1630px) {
      transform: translateX(0);
   }
   &::before {
      position: absolute;
      content: '';
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 1px;
      height: 100%;
      background-color: var(--primary-color-10);
      z-index: 0;
   }

   @media (max-width: 763px) {
      padding: 59px 20px 100px;
      &::after {
         display: none;
      }
      &::before {
         display: none;
      }
      border: none;
      display: flex;
      flex-direction: column;
      min-height: 900px;
   }

   @media (max-width: 762px) and (min-width: 321px) {
      padding: 7.74vw 2.62vw 13.12vw;
      min-height: 118.11vw;
   }

   @media (max-width: 320px) {
      padding: 59px 20px 100px;
      height: 568px;
      min-height: 568px;
   }
`;

export const Title = styled.h1`
   position: relative;
   max-width: 353px;
   color: var(--primary-color);
   font-weight: 700;
   font-size: 56px;
   line-height: 120%;

   &::before {
      position: absolute;
      content: '';
      top: 50%;
      left: -78px;
      transform: translate(-50%, -50%);
      width: 5px;
      height: 120px;
      background: linear-gradient(180deg, #3877ee 0%, #ef5da8 100%);
   }

   @media (max-width: 1160px) {
      max-width: 30.43vw;
      font-size: 4.83vw;

      &::before {
         left: -6.72vw;
         width: 0.43vw;
         height: 10.34vw;
      }
   }
   @media (max-width: 763px) {
      font-size: 40px;
      max-width: 230px;
      &::before {
         display: none;
      }
   }

   @media (max-width: 762px) and (min-width: 321px) {
      font-size: 5.25vw;
      max-width: 30.18vw;
   }

   @media (max-width: 320px) {
      max-width: 123px;
      font-size: 20px;
   }
`;
