import React, {useMemo, useState, useEffect} from 'react'
import ContentHeader from '../../components/ContentHeader';

import { Container, Content, Filters } from './styles';
import SelectInput from '../../components/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';
import { useParams } from 'react-router-dom';

import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';

// interface IRouteParams {
//   match: {
//     params: {
//       type: string;
//     }
//   }
// }

interface IData {
  id: number;
  description: string;
  amountFormatted: string;
  frequency: string;
  dataFormatted: string;
  tagColor: string;
}

export const List = () => {

  const [data, setData] = useState<IData []>([]);
  
  const { type } = useParams();

  const title = useMemo(() => {
    return type === 'entry-balance' ? 'Entradas' : 'Saídas';
  }, [type]);

  const lineColor = useMemo(() => {
    return type === 'entry-balance' ? '#E7931B' : '#E44C4E';
  }, [type]);

  const listData = useMemo(() => {
    return type === 'entry-balance' ? gains : expenses
  }, [type]);

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

  useEffect(() => {
    const response = listData.map((item) => {
      return{
        id: Math.random () * data.length,
        description: item.description,
        amountFormatted: item.amount,
        frequency: item.frequency,
        dataFormatted: item.date,
        tagColor: item.frequency === 'recorrente' ? '#4E41F0' : '#E44C4E' 
      }
    })

    setData(response);
  }, []);

  return (
    <Container>
      <ContentHeader title={title} lineColor={lineColor}>
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
        {
          data.map((item) => (
            <HistoryFinanceCard
              key={item.id}
              tagColor={item.tagColor}
              title={item.description}
              subtitle={item.dataFormatted}
              amount={item.amountFormatted}
            />
          ))
        }
      </Content>
    </Container>
  )
}

export default List;