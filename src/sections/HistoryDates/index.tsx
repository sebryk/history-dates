import { Section, Container, Title } from './styles';
import data from '@/data.json';
import Timeline from '@/components/Timeline';

const index = () => {
   const { title, timeline } = data.historyEvents;

   return (
      <Section>
         <Container>
            <Title>{title}</Title>
            <Timeline timeline={timeline} />
         </Container>
      </Section>
   );
};

export default index;
