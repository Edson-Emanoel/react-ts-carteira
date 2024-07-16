import React, { useMemo, useState } from 'react'
import ContentHeader from '../../components/ContentHeader';

import happyImg from "../../assets/happy.svg"

import {
  Container,
  Content
} from './styles';

import SelectInput from '../../components/SelectInput';
import WalletBox from '../../components/WalletBox';
import MessageBox from '../../components/MessageBox';

import expenses from '../../repositories/expenses';
import gains from '../../repositories/gains';
import listOfMonths from '../../utils/months';

const Dashboard: React.FC = () => {
  const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
  const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());

  const years = useMemo(() => {
    let uniqueYears: number[] = [];
  
    [...expenses, ...gains].forEach(item => {
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
  }, [])

  const months = useMemo(() => {
    return listOfMonths.map((month, index) => {
      return {
        value: index + 1,
        label: month,
      }
    })

  }, []);

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

  return (
    <Container>
      <ContentHeader title='Dashboard' lineColor='#E44C4E'>
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

      <Content>
        <WalletBox
          title='Saldo'
          amount={150.00}
          footerlabel='Atualizado com base nas entradas e saídas'
          icon='dolar'
          color='#4E41F0'
        />

        <WalletBox
          title='Entradas'
          amount={5000.00}
          footerlabel='Atualizado com base nas entradas'
          icon='arrowUp'
          color='#F7931B'
        />

        <WalletBox
          title='Saídas'
          amount={150.00}
          footerlabel='Atualizado com base nas saídas'
          icon='arrowDown'
          color='#E44C4E'
        />

        <MessageBox
          icon={happyImg}
          title='Muito Bem!'
          description='Sua carteira está positiva!'
          footerText='Continue assim considere investir o seu saldo.'
        />
      </Content>
    </Container>
  )
}

export default Dashboard;