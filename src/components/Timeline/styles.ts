import styled from 'styled-components';

export const Container = styled.div`
   height: 100%;

   @media (max-width: 1160px) {
      height: 100%;
   }

   @media (max-width: 763px) {
      margin: 80px auto 0;
      max-width: 723px;
      display: flex;
      flex-direction: column;
      gap: 200px;
   }
   @media (max-width: 762px) and (min-width: 321px) {
      margin: 10.5vw auto 0;
      max-width: 94.88vw;
      gap: 26.25vw;
   }

   @media (max-width: 320px) {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin: 56px auto 0;
      flex-grow: 1;
      max-width: 280px;
      gap: 77px;
   }
`;

export const Wrapper = styled.div`
   position: relative;
   max-width: 973px;
   width: 100%;
   margin: 96px auto 137px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   z-index: 1;

   @media (max-width: 1160px) {
      max-width: 83.88vw;
      margin: 8.28vw auto 11.81vw;
   }
   @media (max-width: 762px) and (min-width: 321px) {
      max-width: 85.3vw;
   }
   @media (max-width: 763px) {
      max-width: 650px;
      position: static;
      margin: 0 auto;
   }
`;

export const Animation = styled.div<{ isSliderVisible: boolean }>`
   position: relative;
   opacity: ${({ isSliderVisible }) => (!isSliderVisible ? 1 : 0)};
   transition: opacity ${({ isSliderVisible }) => (isSliderVisible ? '0.5s' : '2s')} ease;
   @media (max-width: 763px) {
      transition:
         opacity 0.3s ease-in-out,
         transform ${({ isSliderVisible }) => (!isSliderVisible ? '0.5s ease' : '3s')};
      transform: ${({ isSliderVisible }) => (!isSliderVisible ? 'translateY(0)' : 'translateY(30%)')};
   }
`;

export const Title = styled.div`
   display: none;
   @media (max-width: 763px) {
      display: block;
      position: absolute;
      top: -120px;
      left: 0;
      font-weight: 700;
      font-size: 40px;
      line-height: 120%;
      color: var(--primary-color);
   }
   @media (max-width: 762px) and (min-width: 321px) {
      top: -15.75vw;
      font-size: 5.25vw;
   }
   @media (max-width: 320px) {
      display: block;
      position: absolute;
      top: -60px;
      left: 0;
      font-size: 20px;
   }
`;

export const YearsWrapper = styled.div`
   display: flex;
   justify-content: space-between;
   width: 100%;
   position: relative;

   @media (max-width: 1160px) {
      width: 100%;
   }
   @media (max-width: 320px) {
      height: 73px;
      align-items: center;
   }
`;
