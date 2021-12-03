import styled from 'styled-components';

export const Img = styled.img`
  width:100%;
  height:100%;
  object-fit: cover;
  overflow: hidden;
`;
// autry inspired

// container wrapper
export const Container_wrapper = styled.section`
width: 90%;
margin: 0 auto;
margin-top: 50px;
max-width: 1100px;
@media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
`;
export const Container_flex = styled.div`
  display: -webkit-box;
  /* display: -ms-flexbox; */
  display: flex;
  z-index: 100;
  position: relative;
  /* -webkit-box-pack: justify; */
  /* -ms-flex-pack: justify; */
  justify-content: space-between!important;
  margin-bottom: 400px;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    display: normal;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }

`;

export const Container_Text = styled.div`
  position: relative;
  justify-items: left;
  width: 35%;
  @media ${(props) => props.theme.breakpoints.sm}{
    width: 100%;
  }
`;

export const Container_Text_right = styled.div`
  position: relative;
  justify-items: right;
  width: 35%;
  @media ${(props) => props.theme.breakpoints.sm}{
    width: 100%;
`;
// contents for container text.
export const Container_H3 = styled.h3`
  display: block;
  font-size: 2.17em;
  /* font-size: 400px; */
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  /* font-weight: bold; */
  font-weight: 900;
  margin: 0;
`;
export const Container_P = styled.p`
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  margin-top: 20px;
  max-width: 540px;
  line-height: 1.75;
  font-size: 20px;
  color: #888888;
  margin: 0;
  letter-spacing: .01em;
  box-sizing: border-box;
  font-weight: 300;
`;
export const Tagscontainer = styled.div`
display: flex;
z-index: 100;
position: relative;
padding-top: 20px;
-webkit-box-orient: horizontal!important;
-webkit-box-direction: normal!important;
-webkit-box-pack: start!important;
justify-content: flex-start!important;
`;

export const Tag_text = styled.h5`
width: fit-content;
padding: 5px 10px;
border-radius: 28px;
margin-right: 10px!important;
margin: 10px;
/* font-size: 0.83em; */
color: black;
/* margin-block-start: 1.67em;
margin-block-end: 1.67em; */
/* margin-inline-start: 0px; */
/* margin-inline-end: 0px; */
/* font-weight: bold; */
/* width: -webkit-fit-content; */
/* width: -moz-fit-content; */

/* u */
letter-spacing: .01em;
font-weight: 300;
font-size: 14px;
background-color: #f7f7f7;
margin: 0;
/* -webkit-box-direction: normal!important; */
`;
export const Button = styled.div`
  margin: 100px 0px 0px;
  font-size: 18px;
  text-align: center;
  border-bottom: 3px solid #111;
  position: relative;
  -webkit-transition: all .25s;
  -o-transition: all .25s;
  transition: all .25s;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  padding: 20px 0;
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  -webkit-box-shadow: 0 0 1px transparent;
  box-shadow: 0 0 1px transparent;
  position: relative;
  -webkit-transition-property: color;
  -o-transition-property: color;
  transition-property: color;
  -webkit-transition-duration: .25s;
  -o-transition-duration: .25s;
  transition-duration: .25s;
  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 20px 0;
  }
`;

export const ButtonHvr = styled.div`
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #111;
  --webkit-transform: scaleY(0);
  --ms-transform: scaleY(0);
  transform: scaleY(0);
  -webkit-transform-origin: 50% 100%;
  --ms-transform-origin: 50% 100%;
  transform-origin: 50% 100%;
  --webkit-transition-property: transform;
  --webkit-transition-property: -webkit-transform;
  transition-property: -webkit-transform;
  --o-transition-property: transform;
  transition-property: transform;
  transition-property: transform,-webkit-transform;
  --webkit-transition-duration: .25s;
  --o-transition-duration: .25s;
  transition-duration: .25s;
  --webkit-transition-timing-function: ease-out;
  --o-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
`;
export const ContainerImg_Link = styled.a`
  width: 55%;
  display: block;
  cursor: pointer;
  transition: all .25s;
  text-decoration: none;
  @media ${(props) => props.theme.breakpoints.sm}{
    width: 100%;
  }
`;
export const ContainerImg = styled.img`
width: 100%;
height: 100%;
--webkit-animation-delay: .25s!important;
animation-delay: .25s!important;
--webkit-transition: all .65s;
--o-transition: all .65s;
transition: all .65s;
border-radius: 5px;
box-shadow: 0 10px 60px 0 rgb(0 0 0 / 20%);
`;


export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
padding: 3rem;
place-items: center;
column-gap: 2rem;
row-gap: 3rem;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
}

`;

export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 400px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;

`;


export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding:.3rem

}
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
color:#d4c0c0;
font-size: 1.6rem;
padding:1rem 1.5rem;
background: #6b3030;
border-radius: 15px;
transition: 0.5s;
&:hover{
  background: #801414;

}
`;

export const TagList = styled.ul`
display: flex;
justify-content: space-around;
padding: 2rem;
`;
export const Tag = styled.li`
color: #d8bfbf;
font-size: 1.5rem;
`;