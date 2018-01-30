import React from "react";
import { H1, Div, P } from 'glamorous'

import Container from '../components/Container'
import Polaroid from '../components/Poloroid'
import Button from '../components/Button'

import mugshot from '../assets/img/Mugshot.jpg'

export default () => (
  <div>
    <Div backgroundColor={'#2196f3'}>
      <Container>
      <Div display='flex'
           flexWrap='wrap'
           justifyContent='space-around'
           alignItems='center'
           maxWidth='960px'
           minHeight='550px'
           margin='0 auto'>
        <Div flexBasis= '300px'
             margin='1rem' >
          <Polaroid img={mugshot} title='Vernon' />
        </Div>
      <Div flexBasis='450px'
           backgroundColor='#6ec6ff'
           boxShadow='10px 10px 10px 0px rgba(0, 0, 0, 0.4)'
           margin='1rem'>
        <p>Full stack developer with a love for flying robots, Cleantech, and weekly food specials. Always learning new skills and giving 100% to get the job done.</p>
        <Div display='flex'
             justifyContent='center'>
          <Button>Download CV (PDF)</Button>
        </Div>
      </Div>
      </Div>
      </Container>
    </Div>

    <Container>
      <H1 marginTop='3rem'
          textAlign='center'>My Work</H1>
    </Container>
  </div>

);

