import React from 'react'
import ContentHeader from '../../components/ContentHeader';

import { Container, Content } from './styles';
import SelectInput from '../../components/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';

const List: React.FC = () => {

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
      <ContentHeader title='Saídas' lineColor='#E44C4E'>
        <SelectInput options={optionsMeses} />
        <SelectInput options={optionsAnos} />
      </ContentHeader>

      <Content >
        <HistoryFinanceCard
          cardColor='#313862'
          tagColor='#E44C4E'
          title='Conta de Luz'
          subtitle='20/02/2024'
          amount='R$ 89,99'
        />
      </Content>
    </Container>
  )
}

export default List;