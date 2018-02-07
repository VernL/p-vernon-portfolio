import React from 'react';
import { Button } from 'glamorous'

export default (props) => (
  <Button
  backgroundColor='#4caf50'
  border='none'
  color='white'
  outline='none'
  cursor='pointer'
  font='inherit'
  padding='.5rem'
  marginBottom='1rem'
  fontWeight='bold'
  borderRadius='25px'
  css={{':hover': {
    backgroundColor: '#80e27e'
  }
  }}
  onClick={props.clicked}>{props.children}</Button>
);
