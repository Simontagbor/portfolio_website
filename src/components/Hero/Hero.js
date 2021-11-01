import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
       Well, Hello There! 
      </SectionTitle>
      <SectionText>
        I currently specialise in wireframing, rapid prototyping and User research. 
        I would love to hear from you. I can also create personas and story board as well.
      </SectionText>
      <Button onclick={() => window.location ="/"}> learn more</Button>
    </LeftSection>
   
  </Section>
);

export default Hero;