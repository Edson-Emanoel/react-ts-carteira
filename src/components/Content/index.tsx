import React from 'react'

import { Container } from './styles'

interface ContentProps {
  children: any
}

const Content = ({ children }: ContentProps) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default Content;