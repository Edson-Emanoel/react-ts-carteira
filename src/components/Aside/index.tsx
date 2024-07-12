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
          <MenuItemLink href="#">
            <MdDashboard />
            Dashboard
          </MenuItemLink>
          <MenuItemLink href="#">
            <MdArrowDownward/>
            Entradas
          </MenuItemLink>
          <MenuItemLink href="#">
            <MdArrowUpward />
            Saídas
          </MenuItemLink>
          <MenuItemLink href="#">
            <MdExitToApp />
            Sair
          </MenuItemLink>
        </MenuContainer>
    </Container>
  )
}

export default Aside;