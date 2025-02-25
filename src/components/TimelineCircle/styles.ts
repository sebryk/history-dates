import styled from 'styled-components';

export const Container = styled.div`
   position: absolute;
   display: flex;
   align-items: center;
   justify-content: center;
   width: 100%;

   @media (max-width: 763px) {
      bottom: 32px;
      left: 50%;
      transform: translateX(-50%);
      width: unset;
   }

   @media (max-width: 762px) and (min-width: 321px) {
      bottom: 4.2vw;
   }

   @media (max-width: 320px) {
      bottom: 32px;
      left: 50%;
      transform: translateX(-50%);
   }
`;

export const MobileDotsWrapper = styled.div`
   display: none;
   @media (max-width: 763px) {
      display: flex;
      gap: 15px;
   }

   @media (max-width: 762px) and (min-width: 321px) {
      gap: 1.97vw;
   }

   @media (max-width: 320px) {
      gap: 10px;
   }
`;

export const CircleWrapper = styled.div`
   position: relative;
   --radius: 275px;
   width: calc(var(--radius) * 2);
   height: calc(var(--radius) * 2);
   transition: transform 1.6s;

   @media (max-width: 1160px) {
      --radius: 23.71vw;
   }

   @media (max-width: 763px) {
      display: none;
   }
`;

export const Circle = styled.div`
   width: 100%;
   height: 100%;
   border: 1px solid var(--primary-color-10);
   border-radius: 50%;
   position: absolute;
   top: 0;
   left: 0;
`;

export const Title = styled.h3<{ isVisible: boolean }>`
   opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
   transition: ${({ isVisible }) => (isVisible ? 'opacity 0.5s ease' : 'opacity 0.3s ease')};
   transition-delay: ${({ isVisible }) => (isVisible ? '1s' : '0s')};
   position: absolute;
   top: 50%;
   right: -20px;
   transform: translate(100%, -50%);
   font-weight: 700;
   font-size: 20px;
   line-height: 150%;
   color: var(--primary-color);

   @media (max-width: 1160px) {
      right: -1.72vw;
      font-size: 1.72vw;
   }
`;

export const DotWrapper = styled.div<{ angle: number; rotation: number }>`
   --angle: ${({ angle }) => angle}deg;
   --rotation: ${({ rotation }) => rotation}deg;
   position: absolute;
   top: 50%;
   left: 50%;
   width: 56px;
   height: 56px;
   cursor: pointer;
   transform: translate(-50%, -50%) rotate(var(--angle)) translateX(var(--radius)) rotate(calc(var(--angle) * -1))
      rotate(calc(var(--rotation) * -1));
   transition: transform 1.6s;

   @media (max-width: 1160px) {
      width: 4.83vw;
      height: 4.83vw;
   }
`;

export const Dot = styled.div<{
   isActive?: boolean;
}>`
   position: absolute;
   top: 50%;
   left: 50%;
   width: 56px;
   height: 56px;
   transform: translate(-50%, -50%) ${({ isActive }) => (isActive ? 'scale(1)' : 'scale(0.107)')};
   overflow: hidden;
   display: flex;
   justify-content: center;
   font-size: 20px;
   line-height: 150%;
   color: #42567a;
   align-items: center;
   background-color: ${({ isActive }) => (isActive ? 'var(--white-color)' : 'var(--primary-color)')};
   color: var(--primary-color);
   border-radius: 50%;
   transition:
      transform 0.4s,
      background-color 0.07s ease;
   border: 1px solid var(--primary-color-50);

   @media (max-width: 1160px) {
      width: 4.83vw;
      height: 4.83vw;
      font-size: 1.72vw;
   }

   ${DotWrapper}:hover & {
      transform: translate(-50%, -50%) scale(1);
      background-color: var(--white-color);
   }
`;

export const MobileDots = styled.button<{ isActive: boolean }>`
   width: 8px;
   height: 8px;
   background-color: ${({ isActive }) => (isActive ? 'var(--primary-color)' : 'var(--primary-color-40)')};
   border: none;
   border-radius: 50%;
   cursor: pointer;
   transition: background-color 0.4s;

   @media (max-width: 762px) and (min-width: 321px) {
      width: 1.05vw;
      height: 1.05vw;
   }

   @media (max-width: 320px) {
      width: 6px;
      height: 6px;
   }
`;
