import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img, Container_wrapper, Container_flex, Container_Text, ContainerImg_Link, Container_H3, Container_P, Tagscontainer, ContainerImg, Tag_text, Button, Container_Text_right, } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects, Project1, Project2, Project3} from '../../constants/constants';

const Projects = () => (
  <Container_wrapper id="Project1">
        {Project1.map(({id, image, title, description, tags, source, visit }) => (
          <Container_flex key={id}>
            <Container_Text>
              <Container_H3>{title}</Container_H3>
              <Container_P>{description}</Container_P>
                <Tagscontainer>
                  <Tag_text>Product Design</Tag_text>
                  <Tag_text>UX Design </Tag_text>
                </Tagscontainer>
              <a href="/">
               <Button>View Case Study</Button>
              </a>
            </Container_Text>
            <ContainerImg_Link href="/">
              <ContainerImg src={image}/>
            </ContainerImg_Link>
          </Container_flex>
        ))}
        {Project2.map(({id, image, title, description }) => (
          <Container_flex key={id}>
            <ContainerImg_Link href="/">
              <ContainerImg src={image}/>
            </ContainerImg_Link>
            <Container_Text_right>
              <Container_H3>{title}</Container_H3>
              <Container_P>{description}</Container_P>
              <Tagscontainer>
                <Tag_text>Rapid prototyping</Tag_text>
                <Tag_text>UI Design</Tag_text>
              </Tagscontainer>
              <a href="/">
               <Button>View Case Study</Button>
              </a>
            </Container_Text_right>
          </Container_flex>

        ))}

        {Project3.map(({id, image, title, description }) => (
          <Container_flex key={id}>
            <Container_Text>
              <Container_H3>{title}</Container_H3>
                <Container_P>{description}</Container_P>
                  <Tagscontainer>
                    <Tag_text>Product Design</Tag_text>
                    <Tag_text>UX Design </Tag_text>
                  </Tagscontainer>
                  <a href="/">
                   <Button>View Case Study</Button>
                  </a>
            </Container_Text>
            <ContainerImg_Link href="/">
              <ContainerImg src={image}/>
            </ContainerImg_Link>
          </Container_flex>

          ))}
  </Container_wrapper>
);

export default Projects;