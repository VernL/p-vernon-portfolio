import React from 'react'
import { Div} from 'glamorous'
import { css } from 'glamor'
import { FaGithub, FaLinkedinSquare } from 'react-icons/lib/fa'

const LinkStyle = css({boxShadow: 'none', margin: ' 0 .5rem'})

export default () => (
  <Div marginLeft='auto'
       fontSize='2rem'>
    <a className={LinkStyle} href='https://github.com/VernL'>
      <FaGithub color={'black'} />
    </a>
    <a className={LinkStyle} href='https://www.linkedin.com/in/vernon-lillies-a3172270/'>
      <FaLinkedinSquare color={'black'} />
    </a>
  </Div>
)