import styled from 'styled-components';

export const Year = styled.h2<{ isAccent?: boolean }>`
   color: ${({ isAccent }) => (isAccent ? 'var(--accent-color)' : 'var(--secondary-color)')};
   font-weight: 700;
   font-size: 200px;
   line-height: 80%;
   letter-spacing: -0.02em;

   @media (max-width: 1160px) {
      font-size: 17.24vw;
   }

   @media (max-width: 768px) {
      font-size: 140px;
   }

   @media (max-width: 762px) and (min-width: 321px) {
      font-size: 18.37vw;
   }

   @media (max-width: 320px) {
      font-size: 56px;
   }
`;
