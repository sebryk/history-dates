import styled from 'styled-components';

export const Button = styled.button<{ isReversed?: boolean }>`
   width: 40px;
   height: 40px;
   display: flex;
   border-radius: 100%;
   fill: #fff;
   transform: ${({ isReversed }) => (isReversed ? 'rotate(180deg)' : 'rotate(0deg)')};
   cursor: pointer;
   border: none;
   background: var(--white-color);

   @media (max-width: 1160px) {
      width: 3.45vw;
      height: 3.45vw;
   }
`;
