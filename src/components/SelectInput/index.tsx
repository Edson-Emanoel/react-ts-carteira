import React from 'react'

import { Container } from './styles'

interface ISelectInputProps {
  options: {
    value:  string | number;
    label:  string | number;
  }[]
}

const SelectInput: React.FC<ISelectInputProps> = ({ options }) => {
  return (
    <Container>
        <select>           
            {options.map((item) => (
                <option value={item.value}>{item.label}</option>
            ))}
        </select>
    </Container>
  )
}

export default SelectInput;