import ArrowRight from '@/assets/RoundedButton/arrow-right.svg';
import { TimelineNavWrapper, TimelineNavButton, TimelineNavQuantity, TimelineNavContainer } from './styles';
import { FC } from 'react';
import { ITimelineNavProps } from '@/types/types';

const index: FC<ITimelineNavProps> = ({ current, overall, handleTimelineChange }) => {
   const handleClick = (buttonType: 'next' | 'prev') => {
      if (buttonType === 'next') {
         current < overall && handleTimelineChange(current + 1);
      } else if (buttonType === 'prev') {
         current > 0 && handleTimelineChange(current - 1);
      }
   };

   const formatNumber = (num: number) => {
      return num.toString().padStart(2, '0');
   };

   return (
      <TimelineNavContainer>
         <div>
            <TimelineNavQuantity>{formatNumber(current + 1)}/</TimelineNavQuantity>
            <TimelineNavQuantity>{formatNumber(overall)}</TimelineNavQuantity>
         </div>
         <TimelineNavWrapper>
            <TimelineNavButton
               icon={<ArrowRight />}
               isReversed={true}
               disabled={current === 0}
               onClick={() => handleClick('prev')}
            />
            <TimelineNavButton
               icon={<ArrowRight />}
               disabled={current + 1 === overall}
               onClick={() => handleClick('next')}
            />
         </TimelineNavWrapper>
      </TimelineNavContainer>
   );
};

export default index;
