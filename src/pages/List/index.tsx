import React from 'react'
import ContentHeader from '../../components/ContentHeader';

import { Container, Content, Filters } from './styles';
import SelectInput from '../../components/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';

const List: React.FC = () => {

  const months = [
    { value: 7, label: 'Jan'},
    { value: 8, label: 'Fev'},
    { value: 9, label: 'Março' },
    { value: 10, label: 'Março' },
    { value: 11, label: 'Março' },
    { value: 12, label: 'Março' }
  ]
  
  const years = [
    { value: 2024, label: 2024 },
    { value: 2023, label: 2023 },
    { value: 2022, label: 2022 }
  ]

  return (
    <Container>
      <ContentHeader title='Saídas' lineColor='#E44C4E'>
        <SelectInput options={months} />
        <SelectInput options={years} />
      </ContentHeader>

      <Filters>
        <button
          type="button"
          className="tag-filter tag-filter-recurrent"
        >
            Recentes
        </button>

        <button
          type="button"
          className="tag-filter tag-filter-eventual"
        >
            Eventuais
        </button>
      </Filters>

      <Content>
        <HistoryFinanceCard
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