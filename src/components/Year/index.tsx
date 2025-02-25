import { IYearProps } from '@/types/types';
import { Year } from './styles';
import { FC, useEffect, useState } from 'react';

const Index: FC<IYearProps> = ({ year, all, isAccent }) => {
   const [currentYearIndex, setCurrentYearIndex] = useState(all.indexOf(year));

   useEffect(() => {
      const targetIndex = all.indexOf(year);
      if (currentYearIndex === targetIndex) return;

      const step = targetIndex > currentYearIndex ? 1 : -1;
      let intervalDuration = 60;
      let interval: NodeJS.Timeout;

      const updateYear = () => {
         setCurrentYearIndex((prevIndex) => {
            const nextIndex = prevIndex + step;

            intervalDuration = Math.min(intervalDuration * 1.3, 50);
            clearInterval(interval);
            if (nextIndex !== targetIndex) {
               interval = setInterval(updateYear, intervalDuration);
            }

            return nextIndex;
         });
      };

      interval = setInterval(updateYear, intervalDuration);

      return () => clearInterval(interval);
   }, [year, all]);

   return <Year isAccent={isAccent}>{all[currentYearIndex]}</Year>;
};

export default Index;
