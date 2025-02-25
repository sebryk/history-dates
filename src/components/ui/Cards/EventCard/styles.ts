import { styled } from 'styled-components';

export const Container = styled.div`
   max-width: 320px;
   display: flex;
   flex-direction: column;
   gap: 15px;

   @media (max-width: 1160px) {
      max-width: 27.59vw;
      gap: 1.29vw;
   }

   @media (max-width: 763px) {
      max-width: 320px;
      gap: 15px;
   }

   @media (max-width: 762px) and (min-width: 321px) {
      max-width: 41.99vw;
      gap: 1.97vw;
   }

   @media (max-width: 320px) {
      max-width: 166px;
   }
`;

export const Title = styled.h4`
   font-size: 25px;
   line-height: 120%;
   text-transform: uppercase;
   color: var(--secondary-color);

   @media (max-width: 1160px) {
      font-size: 2.16vw;
   }

   @media (max-width: 763px) {
      font-size: 25px;
   }

   @media (max-width: 762px) and (min-width: 321px) {
      font-size: 3.28vw;
   }

   @media (max-width: 320px) {
      line-height: 145%;
      font-size: 16px;
   }
`;

export const Description = styled.p`
   font-size: 20px;
   line-height: 150%;
   color: var(--primary-color);

   @media (max-width: 1160px) {
      font-size: 1.72vw;
   }

   @media (max-width: 763px) {
      font-size: 20px;
   }

   @media (max-width: 762px) and (min-width: 321px) {
      font-size: 2.62vw;
   }

   @media (max-width: 320px) {
      font-size: 14px;
      line-height: 145%;
   }
`;
