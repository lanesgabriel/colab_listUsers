/* Este componente é responsável por montar o layout padrão da aplicação, 
no qual ele insere o componente de Header em todas as possíveis páginas, 
e renderiza os elementos filhos presentes nas rotas filhas a partir do elemento <Outlet /> da biblioteca react-router-dom */

import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}