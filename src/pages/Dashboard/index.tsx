import React, { useMemo, useState } from 'react'
import ContentHeader from '../../components/ContentHeader';

import grinningImg from "../../assets/grinning.svg"
import happyImg from "../../assets/happy.svg"
import sadImg from "../../assets/sad.svg"

import {
  Container,
  Content
} from './styles';

import SelectInput from '../../components/SelectInput';
import WalletBox from '../../components/WalletBox';
import MessageBox from '../../components/MessageBox';
import PieChartBox from '../../components/PieChart';
import HistoryBox from '../../components/HistoryBox'

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

  const totalExpenses = useMemo(() => {
    let total: number = 0;
    
    expenses.forEach(item => {
      const date = new Date(item.date);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;

      if(month === monthSelected && year === yearSelected){
        try {
          total += Number(item.amount);
        } catch { 
          throw new Error('Total inválido. O Total deve ser um número');
        }
      }
    });

    return total;
  }, [monthSelected, yearSelected])

  const totalGains = useMemo(() => {
    let total: number = 0;
    
    gains.forEach(item => {
      const date = new Date(item.date);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;

      if(month === monthSelected && year === yearSelected){
        try {
          total += Number(item.amount);
        } catch { 
          throw new Error('Total inválido. O Total deve ser um número');
        }
      }
    });

    return total;
  }, [monthSelected, yearSelected])

  const totalBalance = useMemo(() => {
    return totalGains - totalExpenses;
  }, [totalGains, totalExpenses])

  const message = useMemo(() => {
    if(totalBalance < 0){
      return {
        icon: sadImg,
        title: 'Que triste',
        description: 'Neste mês, você gastou mais do que deveria.',
        footerText: 'Verifique seus gastos e tente cortar algumas coisas desnecessárias'
      }
    } else if(totalBalance === 0){
      return {
        icon: grinningImg,
        title: 'Ufaaa!',
        description: 'Neste mês, você gastou exatamente o que ganhou',
        footerText: 'Tenha cuidado. No Próximo mês tente poupar seu dinheiro'
      }
    } else {
      return {
        icon: happyImg,
        title: 'Muito Bem!',
        description: 'Sua carteira está positiva!',
        footerText: 'Continue assim considere investir o seu saldo.'
    }
    }
  }, [totalBalance])

  const relationExpensesVersusGains = useMemo(() => {
    const total = totalGains + totalExpenses;

    const percentGains = Number(((totalGains / total) * 100).toFixed(1));
    const percentExpenses = Number(((totalExpenses / total) * 100).toFixed(1));

    const data = [
        {
          name: "Entradas",
          value: totalGains,
          percent: percentGains ? percentGains : 0, 
          color: '#F7931B'
        },
        {
          name: "Saídas",
          value: totalExpenses,
          percent: percentExpenses ? percentExpenses : 0, 
          color: '#E44C4E'
        },
    ];

    return data;
  },[totalGains, totalExpenses]);

  const historyData = useMemo(() => {
    return listOfMonths.map((_, month) => {
        
      let amountEntry = 0;
      gains.forEach(gain => {
        const date = new Date(gain.date);
        const gainMonth = date.getMonth();
        const gainYear = date.getFullYear();

        if(gainMonth === month && gainYear === yearSelected){
          try{
            amountEntry += Number(gain.amount);
          }catch{
            throw new Error('amountEntry is invalid. amountEntry must be valid number.')
          }
        }
      });

      let amountOutput = 0;
      expenses.forEach(expense => {
        const date = new Date(expense.date);
        const expenseMonth = date.getMonth();
        const expenseYear = date.getFullYear();

        if(expenseMonth === month && expenseYear === yearSelected){
          try{
            amountOutput += Number(expense.amount);
          }catch{
            throw new Error('amountOutput is invalid. amountOutput must be valid number.')
          }
        }
      });


      return {
        monthNumber: month,
        month: listOfMonths[month].substr(0, 3),
        amountEntry,
        amountOutput
      }
    })
},[yearSelected]);

  const handleMonthSelected = (month: string) => {
    try {
      const parseMonth = Number(month);
      setMonthSelected(parseMonth)
    } catch {
      throw new Error('Mês inválido. O valor aceito é entre 0 - 12')
    }
  }

  const handleYearSelected = (year: string) => {
    try {
      const parseYear = Number(year);
      setYearSelected(parseYear)
    } catch {
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
          amount={totalBalance}
          footerlabel='Atualizado com base nas entradas e saídas'
          icon='dolar'
          color='#4E41F0'
        />

        <WalletBox
          title='Entradas'
          amount={totalGains}
          footerlabel='Atualizado com base nas entradas'
          icon='arrowUp'
          color='#F7931B'
        />

        <WalletBox
          title='Saídas'
          amount={totalExpenses}
          footerlabel='Atualizado com base nas saídas'
          icon='arrowDown'
          color='#E44C4E'
        />

        <MessageBox
          icon={message.icon}
          title={message.title}
          description={message.description}
          footerText={message.footerText}
        />

        <PieChartBox data={relationExpensesVersusGains}  />
        
        <HistoryBox 
          data={historyData} 
          lineColorAmountEntry="#F7931B"
          lineColorAmountOutput="#E44C4E"
        />
      </Content>
    </Container>
  )
}

export default Dashboard;