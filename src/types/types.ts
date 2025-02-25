import { Dispatch, ReactNode } from 'react';
import { SetStateAction } from 'react';

export interface IEvent {
   year: string;
   description: string;
}

export interface ITimeline {
   title: string;
   events: IEvent[];
}

export interface IHistoryDates {
   title: string;
   timeline: ITimeline[];
}

export interface IYearProps {
   year: string;
   all: string[];
   isAccent?: boolean;
}

export interface IEventCardProps {
   title: string;
   description: string;
}

export interface IRoundedButtonProps {
   title?: string;
   icon?: React.ReactNode;
   isReversed?: boolean;
   disabled?: boolean;
   onClick?: () => void;
   className?: string;
}

export interface ISliderProps {
   children: ReactNode;
}

export interface ITimelineNavProps {
   current: number;
   overall: number;
   handleTimelineChange: (index: number) => void;
}

export interface IThemeCircleProps {
   numberOfDots: number;
   currentDot: number;
   timelineName: string;
   handleTimelineChange: (index: number) => void;
}
