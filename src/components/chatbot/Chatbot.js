import {
  ContentBox,
  H1,
  H2,
  MockImageC,
  MockupFlex,
  TextContainer,
  Paragraph
} from "./chatbotStyles";
import { Container_wrapper } from "../Projects/ProjectsStyles";
import {
  ImgContainer,
  Mockup_flex1,
  TextBox,
  TextBoxH1,
  TextBoxP
} from "../../styles/GlobalComponents/CaseStudyStyles";

const ChatbotCase = () => (
  <ContentBox>
    <TextContainer>
      <H1>The Case Study </H1>
      <Paragraph>
        World Trade Center Accra is searching for an experienced event
        coordinator to partner our organization in hosting Friday events that
        enhance our brand-to-client experience. The event coordinator will be
        tasked with planning and managing our events' calendar, negotiating
        quotes and agreements with vendors, assisting with event promotion and
        effectively delivering on event objectives.
      </Paragraph>
      <H2>Defining The Problem</H2>
    </TextContainer>
    <Mockup_flex1>
      <ImgContainer src="images/projects.jpeg"></ImgContainer>
      <TextBox>
        <TextBoxH1>The feature</TextBoxH1>
        <TextBoxP>
          The event coordinator will be tasked with planning and managing our
          events'
        </TextBoxP>
      </TextBox>
    </Mockup_flex1>
    <Mockup_flex1>
      <TextBox>
        <TextBoxH1>The feature</TextBoxH1>
        <TextBoxP>
          The event coordinator will be tasked with planning and managing our
          events'
        </TextBoxP>
      </TextBox>
      <ImgContainer src="images/projects.jpeg"></ImgContainer>
    </Mockup_flex1>
  </ContentBox>
);

export default ChatbotCase;
