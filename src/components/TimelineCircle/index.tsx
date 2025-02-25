import { FC } from 'react';
import { CircleWrapper, Circle, Dot, Container, DotWrapper, Title, MobileDotsWrapper, MobileDots } from './styles';
import { IThemeCircleProps } from '@/types/types';

const TimelineCircle: FC<IThemeCircleProps> = ({ numberOfDots, currentDot, handleTimelineChange, timelineName }) => {
   const rotationAngle = -(currentDot * (360 / numberOfDots) + 60);
   const dots = Array.from({ length: numberOfDots });

   return (
      <Container>
         <CircleWrapper style={{ transform: `rotate(${rotationAngle}deg)` }}>
            <Circle />
            {dots.map((_, index) => (
               <DotWrapper
                  key={index}
                  angle={(index * 360) / numberOfDots}
                  rotation={rotationAngle}
                  onClick={() => handleTimelineChange(index)}
               >
                  {timelineName && <Title isVisible={index === currentDot}>{timelineName}</Title>}
                  <Dot isActive={index === currentDot}>{index + 1}</Dot>
               </DotWrapper>
            ))}
         </CircleWrapper>
         <MobileDotsWrapper>
            {dots.map((_, index) => (
               <MobileDots
                  isActive={index === currentDot}
                  key={index}
                  onClick={() => handleTimelineChange(index)}
               ></MobileDots>
            ))}
         </MobileDotsWrapper>
      </Container>
   );
};

export default TimelineCircle;
