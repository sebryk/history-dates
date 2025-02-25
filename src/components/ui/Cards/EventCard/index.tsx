import { FC } from 'react';
import { IEventCardProps } from '@/types/types';
import { Container, Title, Description } from './styles';

const EventCard: FC<IEventCardProps> = ({ title, description, ...props }) => {
   return (
      <Container {...props}>
         <Title>{title}</Title>
         <Description>{description}</Description>
      </Container>
   );
};

export default EventCard;
