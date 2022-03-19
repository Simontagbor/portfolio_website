import {
  ContentBox,
  H1,
  H2,
  MockImageC,
  MockupFlex,
  TextContainer,
  Paragraph,
  MyContainer,
  MyContainerOk,
  MyContTextDiv,
  MycontImgDiv,
  MycontImgcenter,
  MycontImg,
  Row,
  Rowmgt8,
  Col,
  LeftVertical,
  ColpImg,
  MyContImgBig,
  RowNomgbt,
  RowCentred,
  NewContentBox,
  RowTop
} from "./chatbotStyles";
import { Container_wrapper } from "../Projects/ProjectsStyles";
import {
  ImgContainer,
  Mockup_flex1,
  TextBox,
  TextBoxH1,
  TextBoxP,
  MacbookPro1441,
  Overviewlg,
  Themelinelg,
  ProjectOverviewlg,
  Infocardcontainer,
  Infocard,
  Icon,
  Database,
  Vectordiv,
  VectorImg,
  VectorImg2,
  Infocardtext,
  Heading,
  Details,
  Overviewflex,
  Quote,
  RedFrame,
  DetailCard,
  IconRed,
  H1_R,
  Themetitle,
  ThememarkerRed,
  ProjectOverviewh1sm5,
  RedThemeContainer,
  InfocardGroup,
  CardContainer,
  CardGroup1,
  GInfocard0,
  H1user1,
  Puser,
  PCardCont,
  Pcard,
  PcardIconcont,
  Numbers,
  PpH1,
  PpP,
  parag,
  Icon2
} from "../../styles/GlobalComponents/CaseStudyStyles";

const ChatbotCase = () => (
  <NewContentBox>
    <RowTop>
      <Col>
        <H1>The Case Study </H1>
        <Paragraph>
          World Trade Center Accra is searching for an experienced event
          coordinator to partner our organization in hosting Friday events that
          enhance our brand-to-client experience. The event coordinator will be
          tasked with planning and managing our events' calendar, negotiating
          quotes and agreements with vendors, assisting with event promotion and
          effectively delivering on event objectives.
        </Paragraph>
      </Col>
    </RowTop>
    <RowCentred>
      <H2> - Defining The Problem - </H2>
    </RowCentred>
    <Mockup_flex1>
      <ImgContainer src="images/projects.jpeg"></ImgContainer>
      <TextBox>
        <TextBoxH1>The feature</TextBoxH1>
        <Paragraph>
          The event coordinator will be tasked with planning and managing our
          events'
        </Paragraph>
      </TextBox>
    </Mockup_flex1>
    <Mockup_flex1>
      <TextBox>
        <TextBoxH1>The feature</TextBoxH1>
        <Paragraph>
          The event coordinator will be tasked with planning and managing our
          events'
        </Paragraph>
      </TextBox>
      <ImgContainer src="images/projects.jpeg"></ImgContainer>
    </Mockup_flex1>
    <Overviewflex>
      <Overviewlg>
        <Themelinelg />
        <ProjectOverviewlg>Project Overview</ProjectOverviewlg>
      </Overviewlg>
      {/* <InfocardGroup>
        <Infocardcontainer>
          <Infocard>
            <Icon>
              <Database>
                <Vectordiv>
                  <VectorImg src="https://storage.googleapis.com/rd-stg-designs/project/5eed9488-bb02-459f-a6b3-ce5857c05302/assets/d6cb997d-0667-4edb-bcf8-6fced6482e84.png" />
                  <VectorImg2 src="https://storage.googleapis.com/rd-stg-designs/project/5eed9488-bb02-459f-a6b3-ce5857c05302/assets/b80e9199-34f0-4455-b772-0e8196a1df07.png" />
                </Vectordiv>
              </Database>
            </Icon>
            <Infocardtext>
              <Heading>Heading</Heading>
              <Details>
                Details will go here lorem ipsum kinda details if you know what
                i mean. so we can alll agreee that this is becoming great
              </Details>
            </Infocardtext>
          </Infocard>
          <Infocard>
            <Icon>
              <Database>
                <Vectordiv>
                  <VectorImg src="https://storage.googleapis.com/rd-stg-designs/project/5eed9488-bb02-459f-a6b3-ce5857c05302/assets/d6cb997d-0667-4edb-bcf8-6fced6482e84.png" />
                  <VectorImg2 src="https://storage.googleapis.com/rd-stg-designs/project/5eed9488-bb02-459f-a6b3-ce5857c05302/assets/b80e9199-34f0-4455-b772-0e8196a1df07.png" />
                </Vectordiv>
              </Database>
            </Icon>
            <Infocardtext>
              <Heading>Heading</Heading>
              <Details>
                Details will go here lorem ipsum kinda details if you know what
                i mean. so we can alll agreee that this is becoming great
              </Details>
            </Infocardtext>
          </Infocard>
        </Infocardcontainer>
        <Infocardcontainer>
          <Infocard>
            <Icon>
              <Database>
                <Vectordiv>
                  <VectorImg src="https://storage.googleapis.com/rd-stg-designs/project/5eed9488-bb02-459f-a6b3-ce5857c05302/assets/921301ed-662f-4a10-b270-f81c36156a2c.png" />
                  <VectorImg2 src="https://storage.googleapis.com/rd-stg-designs/project/5eed9488-bb02-459f-a6b3-ce5857c05302/assets/d572d23b-27ce-433f-84db-a9a7e8ecc0d5.png" />
                </Vectordiv>
              </Database>
            </Icon>
            <Infocardtext>
              <Heading>Heading</Heading>
              <Details>
                Details will go here lorem ipsum kinda details if you know what
                i mean. so we can alll agreee that this is becoming great
              </Details>
            </Infocardtext>
          </Infocard>
          <Infocard>
            <Icon>
              <Database>
                <Vectordiv>
                  <VectorImg src="https://storage.googleapis.com/rd-stg-designs/project/5eed9488-bb02-459f-a6b3-ce5857c05302/assets/1bddba30-e24d-45db-8104-199c41888bfa.png" />
                  <VectorImg2 src="https://storage.googleapis.com/rd-stg-designs/project/5eed9488-bb02-459f-a6b3-ce5857c05302/assets/c9f34a24-c834-4eac-8271-e8d9b9ba1b2d.png" />
                </Vectordiv>
              </Database>
            </Icon>
            <Infocardtext>
              <Heading>Heading</Heading>
              <Details>
                Details will go here lorem ipsum kinda details if you know what
                i mean. so we can alll agreee that this is becoming great
              </Details>
            </Infocardtext>
          </Infocard>
        </Infocardcontainer>
      </InfocardGroup> */}
    </Overviewflex>
    <Rowmgt8>
      <Col>
        <H1>The Case Study </H1>
        <Paragraph>
          World Trade Center Accra is searching for an experienced event
          coordinator to partner our organization in hosting Friday events that
          enhance our brand-to-client experience. The event coordinator will be
          tasked with planning and managing our events' calendar, negotiating
          quotes and agreements with vendors, assisting with event promotion and
          effectively delivering on event objectives.
        </Paragraph>
      </Col>
    </Rowmgt8>
    <RowCentred>
      <H2> - Defining The Problem - </H2>
    </RowCentred>
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
        <Paragraph>
          The event coordinator will be tasked with planning and managing our
          events'
        </Paragraph>
      </TextBox>
      <ImgContainer src="images/projects.jpeg"></ImgContainer>
    </Mockup_flex1>
    <Overviewflex>
      <Themetitle>
        <ThememarkerRed />
        <ProjectOverviewh1sm5>Understanding the User</ProjectOverviewh1sm5>
      </Themetitle>
      <RedThemeContainer>
        <RedFrame>
          <DetailCard>
            <IconRed>
              <Database></Database>
            </IconRed>
            <H1_R>User Research</H1_R>
          </DetailCard>
        </RedFrame>
        <RedFrame>
          <DetailCard>
            <IconRed>
              <Database></Database>
            </IconRed>
            <H1_R>User Research</H1_R>
          </DetailCard>
        </RedFrame>
        <RedFrame>
          <DetailCard>
            <IconRed>
              <Database></Database>
            </IconRed>
            <H1_R>User Research</H1_R>
          </DetailCard>
        </RedFrame>
        <RedFrame>
          <DetailCard>
            <IconRed>
              <Database></Database>
            </IconRed>
            <H1_R>User Research</H1_R>
          </DetailCard>
        </RedFrame>
      </RedThemeContainer>
      <Quote>
        “some thoughtful quote about user centered design and or process”
      </Quote>
    </Overviewflex>
    <CardContainer>
      <CardGroup1>
        <GInfocard0>
          <Icon2></Icon2>
          <H1user1>Research Type;</H1user1>
          <Puser>[Type here]</Puser>
        </GInfocard0>
        <GInfocard0>
          <Icon2></Icon2>
          <H1user1>Research Type;</H1user1>
          <Puser>[Type here]</Puser>
        </GInfocard0>
      </CardGroup1>
      <CardGroup1>
        <GInfocard0>
          <Icon2></Icon2>
          <H1user1>Research Type;</H1user1>
          <Puser>[Type here]</Puser>
        </GInfocard0>
        <GInfocard0>
          <Icon2></Icon2>
          <H1user1>Research Type;</H1user1>
          <Puser>[Type here]</Puser>
        </GInfocard0>
      </CardGroup1>
    </CardContainer>
    <PCardCont>
      <Pcard>
        <PcardIconcont>
          <Numbers>1</Numbers>
        </PcardIconcont>
        <PpH1>Pain Point</PpH1>
        <PpP>
          <parag>
            Write one to two sentences reflecting on the pain point listed above
            and how it will guide designs moving forward
          </parag>
        </PpP>
      </Pcard>
      <Pcard>
        <PcardIconcont>
          <Numbers>1</Numbers>
        </PcardIconcont>
        <PpH1>Pain Point</PpH1>
        <PpP>
          <parag>
            Write one to two sentences reflecting on the pain point listed above
            and how it will guide designs moving forward
          </parag>
        </PpP>
      </Pcard>
      <Pcard>
        <PcardIconcont>
          <Numbers>1</Numbers>
        </PcardIconcont>
        <PpH1>Pain Point</PpH1>
        <PpP>
          <parag>
            Write one to two sentences reflecting on the pain point listed above
            and how it will guide designs moving forward
          </parag>
        </PpP>
      </Pcard>
    </PCardCont>
    <MyContainer>
      <MyContainerOk>
        <MyContTextDiv>
          <H2>Ibidi bob but</H2>
          <Paragraph>
            Three of the busiest bus stops on campus were chosen to be our first
            research spot. There, the team approached students waiting for buses
            for a quick survey.
          </Paragraph>
        </MyContTextDiv>
        <MycontImgDiv>
          <MycontImgcenter>
            <MycontImg src="https://cdn.pixabay.com/photo/2016/11/19/22/52/coding-1841550_960_720.jpg" />
          </MycontImgcenter>
        </MycontImgDiv>
      </MyContainerOk>
      <Rowmgt8>
        <Col>
          <H2>The Problem Space</H2>
          <Paragraph>
            Realizing that "public area" was too broad of a problem space, I
            proposed to choose on-campus bus stops to be our location of
            interest. We then developed three primary research questions
          </Paragraph>
          <div>
            <LeftVertical>
              What are students' current behaviors and attitudes towards social
              interaction at on-campus bus stops?
            </LeftVertical>
            <LeftVertical>
              For students waiting for buses, is there a barrier to social
              interaction? If yes, what constitutes it?
            </LeftVertical>
          </div>
        </Col>
      </Rowmgt8>
      <Rowmgt8>
        <Col>
          <H2>The Problem Space</H2>
          <Paragraph>
            Realizing that "public area" was too broad of a problem space, I
            proposed to choose on-campus bus stops to be our location of
            interest. We then developed three primary research questions
          </Paragraph>
          <ColpImg>
            <MyContImgBig src="https://cdn.pixabay.com/photo/2015/01/21/14/14/apple-606761_960_720.jpg" />
          </ColpImg>
        </Col>
      </Rowmgt8>
      <RowNomgbt>
        <Col>
          <Paragraph>
            Realizing that "public area" was too broad of a problem space, I
          </Paragraph>
        </Col>
      </RowNomgbt>
      <RowCentred>
        <H2> - Prototype - </H2>
      </RowCentred>
      <Rowmgt8>
        <Paragraph>
          Realizing that "public area" was too broad of a problem space, I
          proposed to choose on-campus bus stops to be our location of interest.
          We then developed three primary research questions
        </Paragraph>
      </Rowmgt8>
    </MyContainer>
  </NewContentBox>
);
export default ChatbotCase;
