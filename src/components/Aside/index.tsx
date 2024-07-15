import React from 'react'
import {  
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp
} from "react-icons/md";

import CarteiraLogo from '../../assets/logo.svg'

import { 
  Container,
  Header,
  LogImg,
  MenuContainer,
  MenuItemLink,
  Title
} from './styles'

const Aside: React.FC = () => {
  return (
    <Container>
        <Header>
          <LogImg src={CarteiraLogo} alt="Logo Minha Carteira" />
          <Title>Minha Carteira</Title>
        </Header>
        <MenuContainer>
          <MenuItemLink href="/dashboard">
            <MdDashboard />
            Dashboard
          </MenuItemLink>
          <MenuItemLink href="/list/entry-balance">
            <MdArrowUpward />
            Entradas
          </MenuItemLink>
          <MenuItemLink href="/list/exit-balance">
            <MdArrowDownward/>
            Saídas
          </MenuItemLink>
          <MenuItemLink href="/">
            <MdExitToApp />
            Sair
          </MenuItemLink>
        </MenuContainer>
    </Container>
  )
}

export default Aside;