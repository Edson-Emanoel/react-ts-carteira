import React from 'react'
import ContentHeader from '../../components/ContentHeader';

import { Container } from './styles';
import SelectInput from '../../components/SelectInput';

const Dashboard: React.FC = () => {

  const optionsMeses = [
    { value: 'Jan', label: 'Jan'   },
    { value: 'Fev', label: 'Fev'   },
    { value: 'Mar', label: 'Março' }
  ]
  
  const optionsAnos = [
    { value: '2024', label: '2024' },
    { value: '2023', label: '2023' },
    { value: '2022', label: '2022' }
  ]

  return (
    <Container> 
      <ContentHeader title='Dashboard' lineColor='#F7931B'>
          <SelectInput options={optionsMeses} />
          <SelectInput options={optionsAnos} />
      </ContentHeader>
    </Container>
  )
}

export default Dashboard;