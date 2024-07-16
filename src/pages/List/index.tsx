import React, {useMemo, useState, useEffect} from 'react'
import { v4 as uuid, validate } from 'uuid';

import SelectInput from '../../components/SelectInput';
import ContentHeader from '../../components/ContentHeader';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';

import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';
import formatCurrency from '../../utils/formatCurrency';
import formatDate from '../../utils/formatDate';
import listOfMonths from '../../utils/months';
import { useParams } from 'react-router-dom';

import {
  Container,
  Content,
  Filters
} from './styles';

interface IData {
  description: string;
  amountFormatted: string;
  frequency: string;
  dateFormatted: string;
  tagColor: string;
}

export const List = () => {

  const [data, setData] = useState<IData []>([]);
  const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
  const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());
  const [frequencyFilterSelected, setFrequencyFilterSelected] = useState(['recorrente', 'atual'])
  
  const { movimentType } = useParams();

  const pageData = useMemo(() => {
    return movimentType === 'entry-balance' ?
      {
        title: 'Entradas',
        lineColor: "#F7931B",
        data: gains
      }
    :
      {
        title: 'Saídas',
        lineColor: "#E44C4E",
        data: expenses
      }
  }, [movimentType])

  const years = useMemo(() => {

    let uniqueYears: number[] = []

    const { data } = pageData;
  
    data.forEach((item) => {
      const date = new Date(item.date);
      const year = date.getFullYear();

      if (!uniqueYears.includes(year)) {
        uniqueYears.push(year)
      }
    });

    return uniqueYears.map((year) => {
      return {
        value: year,
        label: year,
      }
    });
  }, [data]);

  const months = useMemo(() => {
    return listOfMonths.map((month, index) => {
      return {
        value: index + 1,
        label: month,
      }
    })

  }, []);

  const handleFrequencyClick = (frequency: string) => {
    const alreadySelected = frequencyFilterSelected.findIndex(item => item === frequency)

    if (alreadySelected >= 0) {
      const filtered = frequencyFilterSelected.filter(item => item !== frequency);
      setFrequencyFilterSelected(filtered);

    } else {
      setFrequencyFilterSelected((prev) => [...prev, frequency]);
    }

  } 

  const handleMonthSelected = (month: string) => {
    try {
      const parseMonth = Number(month);
      setMonthSelected(parseMonth)
    } catch (error) {
      throw new Error('Mês inválido. O valor aceito é entre 0 - 12')
    }
  }

  const handleYearSelected = (year: string) => {
    try {
      const parseYear = Number(year);
      setYearSelected(parseYear)
    } catch (error) {
      throw new Error('Ano inválido. O valor deve ser um número')
    }
  }

  useEffect(() => {
    const { data } = pageData;

    const filteredDate = data.filter((item) => {
      const date = new Date(item.date);
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      return month === monthSelected && year === yearSelected && frequencyFilterSelected.includes(item.frequency);
    });

    const formattedData = filteredDate.map((item) => {
      return{
        id: String(new Date().getTime()),
        description: item.description,
        amountFormatted: formatCurrency(Number(item.amount)),
        frequency: item.frequency,
        dateFormatted: formatDate(item.date),
        tagColor: item.frequency === 'recorrente' ? '#4E41F0' : '#E44C4E' 
      }
    })

    setData(formattedData);
  }, [data, monthSelected, yearSelected, data.length, frequencyFilterSelected]);

  return (
    <Container>
      <ContentHeader title={pageData.title} lineColor={pageData.lineColor}>
        <SelectInput
          options={months}
          onChange={(e) => handleMonthSelected(e.target.value)}
          defaultValue={monthSelected}
        />
        <SelectInput
          options={years} 
          onChange={(e) => handleYearSelected (e.target.value)}
          defaultValue={yearSelected} 
        />
      </ContentHeader>  

      <Filters>
        <button
          type="button"
          className={`tag-filter tag-filter-recurrent
          ${frequencyFilterSelected.includes('recorrente') && 'tag-actived'}`}
          onClick={() => handleFrequencyClick('recorrente')}
        >
            Recorrentes
        </button>

        <button
          type="button"
          className={`tag-filter tag-filter-eventual
          ${frequencyFilterSelected.includes('eventual') && 'tag-actived'}`}
          onClick={() => handleFrequencyClick('eventual')}
        >
            Eventuais
        </button>
      </Filters>

      <Content>
        {
          data.map((item) => (
            <HistoryFinanceCard
              key={uuid()}
              tagColor={item.tagColor}
              title={item.description}
              subtitle={item.dateFormatted}
              amount={item.amountFormatted}
            />
          ))
        }
      </Content>
    </Container>
  )
}

export default List;