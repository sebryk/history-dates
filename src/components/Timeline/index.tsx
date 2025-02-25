import Slider from '@/components/Slider';
import { SliderItem } from '@/components/Slider/styles';
import Year from '@/components/Year';
import EventCard from '@/components/ui/Cards/EventCard';
import { IHistoryDates } from '@/types/types';
import { FC } from 'react';
import { useState, useEffect } from 'react';
import { Container, Title, YearsWrapper } from './styles';
import TimelineNav from '../TimelineNav';
import TimelineCircle from '../TimelineCircle';
import { Wrapper, Animation } from './styles';

const index: FC<Omit<IHistoryDates, 'title'>> = ({ timeline }) => {
   const [timelineIndex, setTimelineIndex] = useState(0);
   const [delayedTimelineIndex, setDelayedTimelineIndex] = useState(0);
   const [isSliderVisible, setIsSliderVisible] = useState(false);
   const firstYear = timeline[timelineIndex]?.events[0]?.year;
   const lastYear = timeline[timelineIndex]?.events.at(-1)?.year;
   const allYears = timeline?.map((timeline) => timeline.events.map((event) => event.year)).flat();

   useEffect(() => {
      const delayedIndexTimeout = setTimeout(() => {
         setDelayedTimelineIndex(timelineIndex);
      }, 400);

      const sliderVisibilityTimeout = setTimeout(() => {
         setIsSliderVisible(false);
      }, 500);

      return () => {
         clearTimeout(delayedIndexTimeout);
         clearTimeout(sliderVisibilityTimeout);
      };
   }, [timelineIndex]);

   const handleTimelineChange = (index: number) => {
      setIsSliderVisible(true);
      setTimelineIndex(index);
   };

   return (
      <Container>
         <Wrapper>
            <YearsWrapper>
               <Year year={firstYear ?? ''} all={allYears} />
               <Year year={lastYear ?? ''} all={allYears} isAccent={true} />
            </YearsWrapper>
            <TimelineCircle
               numberOfDots={timeline?.length}
               currentDot={timelineIndex}
               handleTimelineChange={handleTimelineChange}
               timelineName={timeline?.[delayedTimelineIndex]?.title}
            />
         </Wrapper>
         <TimelineNav current={timelineIndex} overall={timeline?.length} handleTimelineChange={handleTimelineChange} />
         <Animation isSliderVisible={isSliderVisible}>
            <Title>{timeline?.[delayedTimelineIndex]?.title}</Title>
            <Slider>
               {timeline[delayedTimelineIndex]?.events.map((event) => (
                  <SliderItem>
                     <EventCard key={event.description} title={event.year} description={event.description} />
                  </SliderItem>
               ))}
            </Slider>
         </Animation>
      </Container>
   );
};

export default index;
