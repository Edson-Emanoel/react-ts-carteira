import React from 'react'
import Switch from 'react-switch'

import { Container, ToggleLabel, ToggleSelector } from './styles'

const Toggle: React.FC = () => {
  return (
    <Container>
        <ToggleLabel>Light</ToggleLabel>
        <ToggleSelector
            checked
            checkedIcon={false}
            uncheckedIcon={false}
            onChange={() => console.log("mudou")}
        />
        <ToggleLabel>Dark</ToggleLabel>
    </Container>
  )
}

export default Toggle;