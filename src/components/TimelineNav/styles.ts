import styled from 'styled-components';
import RoundedButton from '@/components/ui/Buttons/RoundedButton';

export const TimelineNavContainer = styled.div`
   margin-bottom: 56px;

   @media (max-width: 1160px) {
      margin-bottom: 4.83vw;
   }

   @media (max-width: 763px) {
      margin-bottom: 0;
      position: absolute;
      bottom: 14px;
      left: 20px;
   }

   @media (max-width: 762px) and (min-width: 321px) {
      bottom: 1.84vw;
      left: 2.62vw;
   }

   @media (max-width: 320px) {
      margin-bottom: 0;
      position: absolute;
      bottom: 14px;
      left: 20px;
   }
`;

export const TimelineNavWrapper = styled.div`
   display: flex;
   align-items: center;
   flex-direction: row;
   margin-top: 20px;
   gap: 20px;

   @media (max-width: 1160px) {
      margin-top: 1.72vw;
      gap: 1.72vw;
   }

   @media (max-width: 763px) {
      margin-top: 20px;
      gap: 20px;
   }

   @media (max-width: 762px) and (min-width: 321px) {
      margin-top: 2.62vw;
      gap: 2.62vw;
   }

   @media (max-width: 320px) {
      margin-top: 10px;
      gap: 8px;
   }
`;

export const TimelineNavButton = styled(RoundedButton)`
   width: 50px;
   height: 50px;
   border: 1px solid var(--primary-color-50);
   justify-content: center;
   opacity: 1;
   transition: 0.3s;
   svg {
      width: 10px;
   }
   path {
      stroke: var(--primary-color);
   }

   &:disabled {
      opacity: 0.5;
   }

   @media (max-width: 1160px) {
      width: 4.31vw;
      height: 4.31vw;
      border-width: 0.086vw;
      svg {
         width: 0.86vw;
      }
   }

   @media (max-width: 763px) {
      width: 50px;
      height: 50px;
      border-width: 1px;
      svg {
         width: 10px;
      }
   }

   @media (max-width: 762px) and (min-width: 321px) {
      width: 6.56vw;
      height: 6.56vw;
      border-width: 0.13vw;
      svg {
         width: 1.31vw;
      }
   }

   @media (max-width: 320px) {
      width: 25px;
      height: 25px;
      svg {
         width: 6px;
      }
   }
`;

export const TimelineNavQuantity = styled.p`
   display: inline-block;
   font-weight: 400;
   font-size: 14px;
   color: #42567a;

   @media (max-width: 1160px) {
      font-size: 1.21vw;
   }

   @media (max-width: 763px) {
      font-size: 14px;
   }

   @media (max-width: 762px) and (min-width: 321px) {
      font-size: 1.84vw;
   }
`;
